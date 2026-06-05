import { useState, useRef } from "react";
import { LANGUAGES } from "./lessons.js";

const THEMES = {
  dark: { bg:"#0a0e1a", card:"#151c30", border:"#2a3050", text:"#e8eaf0", subtext:"#6b7db3", header:"#0d1220", input:"#0d1220" },
  light: { bg:"#f0f4ff", card:"#ffffff", border:"#d0d8f0", text:"#1a2040", subtext:"#5566aa", header:"#e8edf8", input:"#f5f7ff" }
};

export default function PhotoLearn({ lang, theme }) {
  const T = THEMES[theme];
  const L = LANGUAGES[lang];
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cameraRef = useRef(null);
  const galleryRef = useRef(null);

  async function analyzePhoto(file) {
    setLoading(true); setResult(null); setError(null);
    try {
      const base64 = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result.split(",")[1]);
        r.onerror = () => rej(new Error("Ошибка чтения файла"));
        r.readAsDataURL(file);
      });

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 600,
          system: `Ты языковой помощник. Анализируй изображение и называй главный предмет/объект/сцену на языке: ${L.name}.

Отвечай СТРОГО в формате JSON (без markdown):
{
  "word": "слово на ${L.name}",
  "transcription": "произношение/транскрипция",
  "translation": "перевод на русский",
  "article": "артикль если нужен (для нем. и фр.)",
  "example": "пример предложения на ${L.name}",
  "example_ru": "перевод примера на русский",
  "tip": "интересный факт или лайфхак для запоминания"
}`,
          messages: [{
            role: "user",
            content: [{
              type: "image",
              source: { type: "base64", media_type: file.type || "image/jpeg", data: base64 }
            }, {
              type: "text",
              text: `Что на этом фото? Назови главный объект на ${L.name} языке. Ответь только JSON.`
            }]
          }]
        })
      });

      const data = await resp.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      
      try {
        const clean = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(clean);
        setResult(parsed);
      } catch(e) {
        setError("Не удалось распознать ответ. Попробуй ещё раз.");
      }
    } catch(e) {
      setError("Ошибка: " + e.message);
    }
    setLoading(false);
  }

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImage(url);
    setResult(null);
    analyzePhoto(file);
  }

  return (
    <div style={{ padding: "14px 16px", overflowY: "auto", maxHeight: "calc(100vh - 175px)" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 17, fontWeight: "bold", color: T.text, marginBottom: 3 }}>
          📸 Назови предмет
        </div>
        <div style={{ fontSize: 13, color: T.subtext, lineHeight: 1.6 }}>
          Сфотографируй любой предмет — узнай как он называется на {L.name.toLowerCase()}.
        </div>
      </div>

      {/* Кнопки загрузки */}
      <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleFile} style={{ display: "none" }} />
      
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <button onClick={() => { fileRef.current.setAttribute("capture","environment"); fileRef.current.click(); }}
          style={{ flex: 1, padding: 16, background: `linear-gradient(135deg,${L.color},${L.color}cc)`, border: "none", borderRadius: 14, color: "#fff", fontSize: 15, cursor: "pointer", fontFamily: "inherit", fontWeight: "bold" }}>
          📷 Сделать фото
        </button>
        <button onClick={() => { fileRef.current.removeAttribute("capture"); fileRef.current.click(); }}
          style={{ flex: 1, padding: 16, background: "transparent", border: `2px solid ${L.color}`, borderRadius: 14, color: L.color, fontSize: 15, cursor: "pointer", fontFamily: "inherit", fontWeight: "bold" }}>
          🖼️ Из галереи
        </button>
      </div>

      {/* Превью фото */}
      {image && (
        <div style={{ marginBottom: 16, borderRadius: 16, overflow: "hidden", border: `2px solid ${T.border}`, position: "relative" }}>
          <img src={image} alt="фото" style={{ width: "100%", maxHeight: 250, objectFit: "cover", display: "block" }} />
          {loading && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 36 }}>🔍</div>
              <div style={{ color: "#fff", fontSize: 14, fontWeight: "bold" }}>Анализирую фото...</div>
            </div>
          )}
        </div>
      )}

      {/* Результат */}
      {result && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Главное слово */}
          <div style={{ background: `linear-gradient(135deg,${L.color}20,${L.color}08)`, border: `2px solid ${L.color}50`, borderRadius: 18, padding: 20, textAlign: "center" }}>
            {result.article && <div style={{ fontSize: 14, color: T.subtext, marginBottom: 4 }}>{result.article}</div>}
            <div style={{ fontSize: 32, fontWeight: "bold", color: L.color, marginBottom: 4 }}>{result.word}</div>
            {result.transcription && <div style={{ fontSize: 14, color: T.subtext, marginBottom: 8 }}>[{result.transcription}]</div>}
            <div style={{ fontSize: 18, color: T.text }}>{result.translation}</div>
          </div>

          {/* Пример */}
          {result.example && (
            <div style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: 14, padding: 14 }}>
              <div style={{ fontSize: 12, color: T.subtext, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>💬 Пример</div>
              <div style={{ fontSize: 14, color: L.color, marginBottom: 4, fontStyle: "italic" }}>{result.example}</div>
              <div style={{ fontSize: 13, color: T.subtext }}>{result.example_ru}</div>
            </div>
          )}

          {/* Лайфхак */}
          {result.tip && (
            <div style={{ background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: 14, padding: 14 }}>
              <div style={{ fontSize: 12, color: "#a855f7", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>💡 Лайфхак</div>
              <div style={{ fontSize: 13, color: T.text, lineHeight: 1.6 }}>{result.tip}</div>
            </div>
          )}

          {/* Кнопка снова */}
          <button onClick={() => { setImage(null); setResult(null); cameraRef.current.click(); }}
            style={{ padding: 13, background: "transparent", border: `1px solid ${T.border}`, borderRadius: 12, color: T.subtext, cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}>
            📸 Сфотографировать ещё
          </button>
        </div>
      )}

      {error && (
        <div style={{ background: "rgba(248,113,113,0.1)", border: "1px solid #f87171", borderRadius: 12, padding: 14, color: "#f87171", fontSize: 13 }}>
          ❌ {error}
        </div>
      )}

      {!image && !loading && (
        <div style={{ textAlign: "center", padding: "30px 0", color: T.subtext }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>📸</div>
          <div style={{ fontSize: 14, lineHeight: 1.7 }}>
            Сфотографируй что угодно —<br/>
            еду, предметы, природу, улицу...<br/>
            ИИ распознает и переведёт!
          </div>
        </div>
      )}
    </div>
  );
}
