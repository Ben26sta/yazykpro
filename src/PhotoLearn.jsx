import { useState, useRef } from "react";
import { LANGUAGES } from "./lessons.js";

const THEMES = {
  dark: { bg:"#0a0e1a", card:"#151c30", border:"#2a3050", text:"#e8eaf0", subtext:"#6b7db3", input:"#0d1220" },
  light: { bg:"#f0f4ff", card:"#ffffff", border:"#d0d8f0", text:"#1a2040", subtext:"#5566aa", input:"#f5f7ff" }
};

export default function PhotoLearn({ lang, theme }) {
  const T = THEMES[theme];
  const L = LANGUAGES[lang];
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
          max_tokens: 500,
          system: `Ты языковой помощник. Анализируй изображение и называй главный объект на языке: ${L.name}. Отвечай ТОЛЬКО JSON без markdown:\n{"word":"слово","transcription":"произношение","translation":"перевод на русский","article":"артикль если нужен","example":"пример на ${L.name}","example_ru":"перевод примера","tip":"лайфхак для запоминания"}`,
          messages: [{
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: file.type || "image/jpeg", data: base64 } },
              { type: "text", text: `Что на фото? Назови главный объект на ${L.name}. Только JSON.` }
            ]
          }]
        })
      });

      const data = await resp.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      try {
        const clean = text.replace(/```json|```/g, "").trim();
        setResult(JSON.parse(clean));
      } catch(e) {
        setError("Не удалось разобрать ответ. Попробуй снова.");
      }
    } catch(e) {
      setError("Ошибка: " + e.message);
    }
    setLoading(false);
  }

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    setImage(URL.createObjectURL(file));
    setResult(null);
    analyzePhoto(file);
  }

  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:17, fontWeight:"bold", color:T.text, marginBottom:3 }}>📸 Назови предмет</div>
        <div style={{ fontSize:13, color:T.subtext, lineHeight:1.6 }}>
          Сфотографируй любой предмет — узнай как он называется на {L.name.toLowerCase()}.
        </div>
      </div>

      <input ref={galleryRef} type="file" accept="image/*" onChange={handleFile} style={{ display:"none" }} />

      <button onClick={() => galleryRef.current.click()} style={{ width:"100%", padding:16, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:14, color:"#fff", fontSize:15, cursor:"pointer", fontFamily:"inherit", fontWeight:"bold", marginBottom:14 }}>
        📷 Выбрать фото или сделать снимок
      </button>

      {image && (
        <div style={{ marginBottom:14, borderRadius:16, overflow:"hidden", border:`2px solid ${T.border}`, position:"relative" }}>
          <img src={image} alt="фото" style={{ width:"100%", maxHeight:230, objectFit:"cover", display:"block" }} />
          {loading && (
            <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.65)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:10 }}>
              <div style={{ fontSize:34 }}>🔍</div>
              <div style={{ color:"#fff", fontSize:14, fontWeight:"bold" }}>Анализирую...</div>
            </div>
          )}
        </div>
      )}

      {result && (
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          <div style={{ background:`${L.color}15`, border:`2px solid ${L.color}50`, borderRadius:18, padding:18, textAlign:"center" }}>
            {result.article && <div style={{ fontSize:14, color:T.subtext, marginBottom:3 }}>{result.article}</div>}
            <div style={{ fontSize:30, fontWeight:"bold", color:L.color, marginBottom:3 }}>{result.word}</div>
            {result.transcription && <div style={{ fontSize:13, color:T.subtext, marginBottom:6 }}>[{result.transcription}]</div>}
            <div style={{ fontSize:17, color:T.text }}>{result.translation}</div>
          </div>

          {result.example && (
            <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:13 }}>
              <div style={{ fontSize:11, color:T.subtext, marginBottom:5, textTransform:"uppercase", letterSpacing:1 }}>💬 Пример</div>
              <div style={{ fontSize:14, color:L.color, marginBottom:3, fontStyle:"italic" }}>{result.example}</div>
              <div style={{ fontSize:13, color:T.subtext }}>{result.example_ru}</div>
            </div>
          )}

          {result.tip && (
            <div style={{ background:"rgba(168,85,247,0.08)", border:"1px solid rgba(168,85,247,0.3)", borderRadius:14, padding:13 }}>
              <div style={{ fontSize:11, color:"#a855f7", marginBottom:5, textTransform:"uppercase", letterSpacing:1 }}>💡 Лайфхак</div>
              <div style={{ fontSize:13, color:T.text, lineHeight:1.6 }}>{result.tip}</div>
            </div>
          )}

          <button onClick={() => { setImage(null); setResult(null); }} style={{ padding:12, background:"transparent", border:`1px solid ${T.border}`, borderRadius:12, color:T.subtext, cursor:"pointer", fontFamily:"inherit", fontSize:13 }}>
            📸 Сфотографировать ещё
          </button>
        </div>
      )}

      {error && (
        <div style={{ background:"rgba(248,113,113,0.1)", border:"1px solid #f87171", borderRadius:12, padding:13, color:"#f87171", fontSize:13 }}>
          ❌ {error}
        </div>
      )}

      {!image && !loading && (
        <div style={{ textAlign:"center", padding:"28px 0", color:T.subtext }}>
          <div style={{ fontSize:60, marginBottom:12 }}>📸</div>
          <div style={{ fontSize:14, lineHeight:1.8 }}>
            Сфотографируй что угодно —<br/>
            еду, предметы, природу, улицу...<br/>
            ИИ распознает и переведёт на {L.name.toLowerCase()}!
          </div>
        </div>
      )}
    </div>
  );
}
