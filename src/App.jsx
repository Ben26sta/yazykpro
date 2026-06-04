 import { useState, useEffect, useRef } from "react";
import { LANGUAGES, LESSONS } from "./lessons.js";

function save(p) { try { localStorage.setItem("yazykpro_v1", JSON.stringify(p)); } catch(e) {} }
function load() { try { const s=localStorage.getItem("yazykpro_v1"); return s?JSON.parse(s):null; } catch(e) { return null; } }

const THEMES = {
  dark: { bg:"#0a0e1a", card:"#151c30", border:"#2a3050", text:"#e8eaf0", subtext:"#6b7db3", header:"#0d1220", input:"#0d1220" },
  light: { bg:"#f0f4ff", card:"#ffffff", border:"#d0d8f0", text:"#1a2040", subtext:"#5566aa", header:"#e8edf8", input:"#f5f7ff" }
};

const LANG_LIST = ["en","de","fr"];

function ProgressBar({ value, max, color, theme }) {
  const T=THEMES[theme];
  return <div style={{ background:T.border, borderRadius:6, height:8, overflow:"hidden" }}><div style={{ width:`${Math.min(100,max>0?(value/max)*100:0)}%`, height:"100%", background:color, borderRadius:6, transition:"width 0.5s" }} /></div>;
}

function WelcomeScreen({ onClose, theme }) {
  const T=THEMES[theme]; const [step,setStep]=useState(0);
  const steps=[
    { icon:"🌍", title:"ЯзыкПро", text:"Учи английский, немецкий и французский языки. Быстро, удобно и эффективно — прямо в Telegram!" },
    { icon:"📚", title:"Уроки по темам", text:"Каждый урок — новая тема. Приветствия, еда, путешествия, семья и многое другое." },
    { icon:"✏️", title:"Практика", text:"Переводи слова, выбирай варианты, составляй фразы. Учёба через практику — самый эффективный метод." },
    { icon:"🤖", title:"ИИ-собеседник", text:"Практикуй живой разговор с ИИ на любом языке. Задавай вопросы — получай ответы и исправления ошибок." },
    { icon:"🏆", title:"Достижения", text:"Зарабатывай награды, поддерживай серию дней и следи за прогрессом по каждому языку!" },
  ];
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:22, padding:28, maxWidth:360, width:"100%" }}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:52, marginBottom:12 }}>{steps[step].icon}</div>
          <div style={{ fontSize:20, fontWeight:"bold", color:T.text, marginBottom:8 }}>{steps[step].title}</div>
          <div style={{ fontSize:14, color:T.subtext, lineHeight:1.65 }}>{steps[step].text}</div>
        </div>
        <div style={{ display:"flex", gap:6, justifyContent:"center", marginBottom:22 }}>
          {steps.map((_,i)=><div key={i} style={{ width:i===step?22:8, height:8, borderRadius:4, background:i===step?"#6366f1":T.border, transition:"all 0.3s" }} />)}
        </div>
        <div style={{ display:"flex", gap:10 }}>
          {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{ flex:1, padding:12, background:"transparent", border:`1px solid ${T.border}`, borderRadius:12, color:T.subtext, cursor:"pointer", fontFamily:"inherit" }}>← Назад</button>}
          <button onClick={()=>step<steps.length-1?setStep(s=>s+1):onClose()} style={{ flex:1, padding:12, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", border:"none", borderRadius:12, color:"#fff", cursor:"pointer", fontFamily:"inherit", fontWeight:"bold" }}>
            {step<steps.length-1?"Далее →":"Начать! 🚀"}
          </button>
        </div>
      </div>
    </div>
  );
}

function LangSelector({ current, onSelect, theme }) {
  const T=THEMES[theme];
  return (
    <div style={{ display:"flex", gap:8, padding:"10px 16px", background:T.header, borderBottom:`1px solid ${T.border}`, overflowX:"auto", scrollbarWidth:"none" }}>
      {LANG_LIST.map(id=>{ const l=LANGUAGES[id]; const active=current===id; return (
        <button key={id} onClick={()=>onSelect(id)} style={{ padding:"7px 14px", borderRadius:20, border:`1px solid ${active?l.color:T.border}`, background:active?`${l.color}20`:"transparent", color:active?l.color:T.subtext, fontSize:13, cursor:"pointer", whiteSpace:"nowrap", fontFamily:"inherit", display:"flex", alignItems:"center", gap:6, transition:"all 0.2s" }}>
          <span style={{ fontSize:18 }}>{l.flag}</span>{l.name}
        </button>
      ); })}
    </div>
  );
}

function HomeScreen({ progress, lang, onNavigate, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const lessons=LESSONS[lang]||[];
  const lp=progress[lang]||{};
  const completed=lessons.filter(l=>lp[l.id]?.done).length;

  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      <div style={{ marginBottom:14 }}>
        <div style={{ fontSize:20, fontWeight:"bold", color:T.text }}>{L.flag} {L.name}</div>
        <div style={{ fontSize:12, color:T.subtext, marginTop:2 }}>Уроков пройдено: {completed} из {lessons.length}</div>
        <div style={{ marginTop:8 }}><ProgressBar value={completed} max={lessons.length} color={L.color} theme={theme}/></div>
      </div>

      {/* ИИ-собеседник */}
      <button onClick={()=>onNavigate("chat")} style={{ width:"100%", marginBottom:14, padding:"14px 16px", background:"linear-gradient(135deg,#1a1535,#0d1025)", border:"1px solid #6366f1", borderRadius:16, cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:14, textAlign:"left" }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>🤖</div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:14, fontWeight:"bold", color:"#fff", marginBottom:2 }}>ИИ-собеседник</div>
          <div style={{ fontSize:12, color:"#6b7db3" }}>Практикуй живой разговор на {L.name.toLowerCase()}</div>
        </div>
        <div style={{ color:"#6366f1", fontSize:18 }}>→</div>
      </button>

      <div style={{ fontSize:12, color:T.subtext, marginBottom:10, textTransform:"uppercase", letterSpacing:1 }}>Уроки</div>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {lessons.map((lesson,idx)=>{
          const done=lp[lesson.id]?.done;
          const score=lp[lesson.id]?.score||0;
          const locked=idx>0&&!lessons.slice(0,idx).every(l=>lp[l.id]?.done);
          return (
            <button key={lesson.id} onClick={()=>!locked&&onNavigate("lesson",lesson.id)} style={{ background:T.card, border:`1px solid ${done?"#4ade80":locked?"#1e2540":T.border}`, borderRadius:14, padding:"13px 15px", textAlign:"left", cursor:locked?"not-allowed":"pointer", color:T.text, display:"flex", alignItems:"center", gap:13, opacity:locked?0.5:1, transition:"all 0.2s" }}
              onMouseEnter={e=>!locked&&(e.currentTarget.style.borderColor=L.color)} onMouseLeave={e=>e.currentTarget.style.borderColor=done?"#4ade80":locked?"#1e2540":T.border}>
              <div style={{ width:44, height:44, borderRadius:12, background:done?`rgba(74,222,128,0.15)`:locked?"#1e2540":`${L.color}20`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>
                {locked?"🔒":lesson.emoji}
              </div>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:14, fontWeight:"bold", marginBottom:2 }}>{lesson.title}</div>
                <div style={{ fontSize:11, color:T.subtext }}>{lesson.description}</div>
                {done&&<div style={{ fontSize:11, color:"#4ade80", marginTop:3 }}>✓ Пройден · {score}%</div>}
                {!done&&!locked&&<div style={{ fontSize:11, color:L.color, marginTop:3 }}>{lesson.level}</div>}
              </div>
              {!locked&&<span style={{ color:done?"#4ade80":L.color, fontSize:18 }}>{done?"✓":"→"}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LessonScreen({ lang, lessonId, onBack, onComplete, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const lesson=LESSONS[lang]?.find(l=>l.id===lessonId);
  const [phase,setPhase]=useState("theory"); // theory | practice | result
  const [qIdx,setQIdx]=useState(0);
  const [answer,setAnswer]=useState("");
  const [result,setResult]=useState(null);
  const [correct,setCorrect]=useState(0);
  const [showHint,setShowHint]=useState(false);

  if(!lesson) return null;
  const q=lesson.questions[qIdx];

  function checkAnswer() {
    const userAns=answer.trim().toLowerCase().replace(/[.,!?]/g,"");
    const correctAns=q.answer.toLowerCase().replace(/[.,!?]/g,"");
    const isOk=userAns===correctAns||(q.type==="choice"&&answer===q.answer);
    setResult(isOk?"correct":"wrong");
    if(isOk) setCorrect(c=>c+1);
  }

  function next() {
    if(qIdx<lesson.questions.length-1){ setQIdx(q=>q+1); setAnswer(""); setResult(null); setShowHint(false); }
    else { const score=Math.round((correct+(result==="correct"?1:0))/lesson.questions.length*100); setPhase("result"); onComplete(lang,lessonId,score); }
  }

  if(phase==="theory") return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", color:L.color, fontSize:14, cursor:"pointer", marginBottom:12, padding:0 }}>← Назад</button>
      <div style={{ textAlign:"center", marginBottom:20 }}>
        <div style={{ fontSize:48, marginBottom:8 }}>{lesson.emoji}</div>
        <div style={{ fontSize:18, fontWeight:"bold", color:T.text, marginBottom:4 }}>{lesson.title}</div>
        <div style={{ fontSize:12, color:T.subtext }}>{lesson.level} · {lesson.questions.length} заданий</div>
      </div>
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:16, padding:18, marginBottom:16 }}>
        <div style={{ fontSize:13, fontWeight:"bold", color:T.text, marginBottom:10 }}>📖 Что учим:</div>
        <div style={{ fontSize:13, color:T.subtext, lineHeight:2, whiteSpace:"pre-line" }}>{lesson.theory}</div>
      </div>
      {lesson.words.length>0&&(
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:13, fontWeight:"bold", color:T.text, marginBottom:10 }}>🗂 Ключевые слова:</div>
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {lesson.words.map(w=>(
              <div key={w.word} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:"11px 14px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <span style={{ fontSize:15, fontWeight:"bold", color:L.color }}>{w.word}</span>
                  <span style={{ fontSize:14, color:T.text }}>{w.translation}</span>
                </div>
                <div style={{ fontSize:12, color:T.subtext, fontStyle:"italic" }}>{w.example}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={()=>setPhase("practice")} style={{ width:"100%", padding:15, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:14, color:"#fff", fontSize:15, cursor:"pointer", fontWeight:"bold", fontFamily:"inherit" }}>
        Начать практику →
      </button>
    </div>
  );

  if(phase==="practice") return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
      <div style={{ marginBottom:12 }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
          <span style={{ fontSize:13, fontWeight:"bold", color:T.text }}>{lesson.title}</span>
          <span style={{ fontSize:12, color:T.subtext }}>{qIdx+1}/{lesson.questions.length}</span>
        </div>
        <ProgressBar value={qIdx} max={lesson.questions.length} color={L.color} theme={theme}/>
      </div>

      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:16, padding:18, marginBottom:14 }}>
        <div style={{ fontSize:15, color:T.text, lineHeight:1.6 }}>{q.q}</div>
      </div>

      {q.type==="choice"?(
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:14 }}>
          {q.options.map(opt=>{ const isSel=answer===opt; const isCorr=result&&opt===q.answer; const isWrong=result&&isSel&&opt!==q.answer;
            return <button key={opt} onClick={()=>!result&&setAnswer(opt)} style={{ padding:"12px 15px", borderRadius:12, border:`1px solid ${isCorr?"#4ade80":isWrong?"#f87171":isSel?L.color:T.border}`, background:isCorr?"rgba(74,222,128,0.1)":isWrong?"rgba(248,113,113,0.1)":isSel?`${L.color}15`:T.card, color:isCorr?"#4ade80":isWrong?"#f87171":T.text, textAlign:"left", cursor:result?"default":"pointer", fontSize:14, fontFamily:"inherit", transition:"all 0.2s" }}>{opt}</button>;
          })}
        </div>
      ):(
        <div style={{ marginBottom:14 }}>
          <input value={answer} onChange={e=>setAnswer(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!result&&checkAnswer()} placeholder="Введи ответ..." disabled={!!result}
            style={{ width:"100%", padding:"12px 14px", background:T.input, border:`1px solid ${result==="correct"?"#4ade80":result==="wrong"?"#f87171":T.border}`, borderRadius:12, color:T.text, fontSize:15, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/>
          {!result&&q.hint&&(
            <button onClick={()=>setShowHint(!showHint)} style={{ background:"none", border:"none", color:T.subtext, fontSize:12, cursor:"pointer", marginTop:6, padding:0 }}>
              {showHint?`💡 ${q.hint}`:"💡 Показать подсказку"}
            </button>
          )}
        </div>
      )}

      {!result?(
        <button onClick={checkAnswer} disabled={!answer} style={{ width:"100%", padding:13, background:answer?`linear-gradient(135deg,${L.color},${L.color}cc)`:"#1e2540", border:"none", borderRadius:12, color:"#fff", fontSize:15, cursor:answer?"pointer":"not-allowed", fontFamily:"inherit" }}>Проверить</button>
      ):(
        <div>
          <div style={{ padding:13, borderRadius:12, marginBottom:10, background:result==="correct"?"rgba(74,222,128,0.1)":"rgba(248,113,113,0.1)", border:`1px solid ${result==="correct"?"#4ade80":"#f87171"}` }}>
            <div style={{ fontSize:14, fontWeight:"bold", color:result==="correct"?"#4ade80":"#f87171" }}>
              {result==="correct"?"✅ Верно!":"❌ Правильный ответ: "+q.answer}
            </div>
          </div>
          <button onClick={next} style={{ width:"100%", padding:13, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:12, color:"#fff", fontSize:15, cursor:"pointer", fontFamily:"inherit" }}>
            {qIdx<lesson.questions.length-1?"Следующий →":"Завершить ✓"}
          </button>
        </div>
      )}
    </div>
  );

  if(phase==="result") {
    const total=lesson.questions.length;
    const sc=Math.round(correct/total*100);
    return (
      <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
        <div style={{ textAlign:"center", padding:"30px 0" }}>
          <div style={{ fontSize:56, marginBottom:12 }}>{sc>=80?"🎉":sc>=60?"👍":"📚"}</div>
          <div style={{ fontSize:24, fontWeight:"bold", color:T.text, marginBottom:6 }}>{sc}%</div>
          <div style={{ fontSize:14, color:T.subtext, marginBottom:20 }}>Правильных: {correct} из {total}</div>
          <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:16, padding:16, marginBottom:20, textAlign:"left" }}>
            <div style={{ fontSize:13, color:T.text, lineHeight:1.7 }}>
              {sc>=80?"🌟 Отлично! Урок пройден. Открыт следующий урок!":sc>=60?"👍 Хороший результат! Попробуй ещё раз для лучшего закрепления.":"📚 Повтори теорию и попробуй снова — у тебя получится!"}
            </div>
          </div>
          <div style={{ display:"flex", gap:10 }}>
            <button onClick={()=>{setPhase("theory");setQIdx(0);setAnswer("");setResult(null);setCorrect(0);}} style={{ flex:1, padding:13, background:"transparent", border:`1px solid ${T.border}`, borderRadius:12, color:T.subtext, cursor:"pointer", fontFamily:"inherit" }}>🔄 Повторить</button>
            <button onClick={onBack} style={{ flex:1, padding:13, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:12, color:"#fff", cursor:"pointer", fontFamily:"inherit" }}>← К урокам</button>
          </div>
        </div>
      </div>
    );
  }
}

function ChatScreen({ lang, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const [messages,setMessages]=useState([
    { role:"assistant", text:`Привет! Я твой ИИ-собеседник для практики ${L.name.toLowerCase()} языка. Можем разговаривать на ${L.name.toLowerCase()}, я буду исправлять ошибки и помогать учиться. С чего начнём? 😊` }
  ]);
  const [input,setInput]=useState(""); const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[messages]);

  const QUICK = {
    en: ["How do I introduce myself?", "Tell me about yourself", "What's the weather like?", "Help me practice travel phrases"],
    de: ["Wie stelle ich mich vor?", "Erkläre mir die deutschen Artikel", "Was ist dein Lieblingsessen?", "Hilf mir mit Reisephrasen"],
    fr: ["Comment me présenter?", "Expliquez-moi les articles français", "Quel est votre plat préféré?", "Aidez-moi avec les phrases de voyage"],
  };

  async function send(text) {
    const msg=text||input.trim(); if(!msg||loading) return;
    setInput(""); setMessages(m=>[...m,{role:"user",text:msg}]); setLoading(true);
    try {
      const history=messages.slice(-8).map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}));
      const resp=await fetch("/api/chat",{ method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"claude-haiku-4-5-20251001", max_tokens:600,
          system:`Ты дружелюбный языковой партнёр для изучения ${L.name} языка. 
Правила:
1. Веди разговор преимущественно на ${L.name} языке (уровень A1-A2)
2. Если ученик пишет по-русски — отвечай по-русски И дублируй ответ на ${L.name}
3. Мягко исправляй грамматические ошибки: "Почти правильно! Правильно будет: ..."
4. Используй простые слова и короткие предложения
5. После каждого ответа задавай простой вопрос для продолжения беседы
6. Иногда давай полезные слова или фразы по теме разговора
7. Будь позитивным и поддерживающим — хвали за прогресс
8. Максимум 150 слов в ответе`,
          messages:[...history,{role:"user",content:msg}]
        })
      });
      const data=await resp.json();
      let text2="Нет ответа";
      if(data.content&&data.content.length>0) text2=data.content.map(b=>b.text||"").join("").trim();
      else if(data.error) text2="Ошибка: "+JSON.stringify(data.error).slice(0,80);
      setMessages(m=>[...m,{role:"assistant",text:text2}]);
    } catch(e) { setMessages(m=>[...m,{role:"assistant",text:"Ошибка подключения. Попробуй снова."}]); }
    setLoading(false);
  }

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"calc(100vh - 175px)" }}>
      <div style={{ padding:"12px 16px 8px", borderBottom:`1px solid ${T.border}` }}>
        <div style={{ fontSize:14, fontWeight:"bold", color:T.text }}>{L.flag} Разговорная практика — {L.name}</div>
        <div style={{ fontSize:11, color:T.subtext }}>ИИ исправляет ошибки и помогает учиться</div>
      </div>
      {messages.length<=1&&(
        <div style={{ padding:"10px 16px 0", display:"flex", gap:6, flexWrap:"wrap" }}>
          {(QUICK[lang]||[]).map(q=>(
            <button key={q} onClick={()=>send(q)} style={{ padding:"6px 12px", borderRadius:18, border:`1px solid ${T.border}`, background:"transparent", color:T.subtext, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>{q}</button>
          ))}
        </div>
      )}
      <div style={{ flex:1, overflowY:"auto", padding:"12px 16px", display:"flex", flexDirection:"column", gap:10 }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ display:"flex", justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
            <div style={{ maxWidth:"85%", padding:"10px 14px", borderRadius:m.role==="user"?"16px 16px 4px 16px":"16px 16px 16px 4px",
              background:m.role==="user"?`linear-gradient(135deg,${L.color},${L.color}cc)`:T.card,
              border:m.role==="user"?"none":`1px solid ${T.border}`,
              color:m.role==="user"?"#fff":T.text, fontSize:13, lineHeight:1.7, whiteSpace:"pre-wrap" }}>
              {(m.text||"").replace(/\*\*(.*?)\*\*/g,"$1")}
            </div>
          </div>
        ))}
        {loading&&<div style={{ display:"flex" }}><div style={{ padding:"10px 16px", borderRadius:"16px 16px 16px 4px", background:T.card, border:`1px solid ${T.border}`, color:T.subtext, fontSize:13 }}>✍️ Печатает...</div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{ padding:"10px 16px 14px", borderTop:`1px solid ${T.border}`, display:"flex", gap:8 }}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&send()} placeholder={`Напиши на ${L.name.toLowerCase()} или по-русски...`}
          style={{ flex:1, padding:"11px 14px", background:T.input, border:`1px solid ${T.border}`, borderRadius:24, color:T.text, fontSize:14, outline:"none", fontFamily:"inherit" }}/>
        <button onClick={()=>send()} disabled={!input.trim()||loading} style={{ width:44, height:44, borderRadius:"50%", background:input.trim()&&!loading?`linear-gradient(135deg,${L.color},${L.color}cc)`:"#1e2540", border:"none", cursor:input.trim()&&!loading?"pointer":"default", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center" }}>➤</button>
      </div>
    </div>
  );
}

function DictionaryScreen({ lang, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const [flipped,setFlipped]=useState(null);
  const allWords=LESSONS[lang]?.flatMap(l=>l.words)||[];
  const [search,setSearch]=useState("");
  const filtered=allWords.filter(w=>!search||w.word.toLowerCase().includes(search.toLowerCase())||w.translation.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      <div style={{ fontSize:16, fontWeight:"bold", color:T.text, marginBottom:3 }}>📖 Словарь — {L.name}</div>
      <div style={{ fontSize:12, color:T.subtext, marginBottom:12 }}>{allWords.length} слов из всех уроков</div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Поиск слова..."
        style={{ width:"100%", padding:"10px 13px", background:T.input, border:`1px solid ${T.border}`, borderRadius:12, color:T.text, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit", marginBottom:12 }}/>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {filtered.map((w,i)=>(
          <div key={i} onClick={()=>setFlipped(flipped===i?null:i)} style={{ background:T.card, border:`1px solid ${flipped===i?L.color:T.border}`, borderRadius:13, padding:"12px 14px", cursor:"pointer", transition:"all 0.2s" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:15, fontWeight:"bold", color:L.color }}>{w.word}</span>
              <span style={{ fontSize:14, color:T.text }}>{w.translation}</span>
            </div>
            {flipped===i&&<div style={{ marginTop:8, fontSize:12, color:T.subtext, fontStyle:"italic", borderTop:`1px solid ${T.border}`, paddingTop:8 }}>{w.example}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [lang,setLang]=useState("en");
  const [tab,setTab]=useState("home");
  const [screen,setScreen]=useState(null);
  const [lessonId,setLessonId]=useState(null);
  const [showWelcome,setShowWelcome]=useState(false);
  const [theme,setTheme]=useState("dark");
  const [progress,setProgress]=useState(()=>load()||{});

  useEffect(()=>{ save(progress); },[progress]);
  useEffect(()=>{ const s=localStorage.getItem("yazykpro_welcome"); if(!s){setShowWelcome(true);localStorage.setItem("yazykpro_welcome","1");} },[]);

  function handleComplete(l,lid,score) {
    setProgress(p=>({ ...p, [l]:{ ...(p[l]||{}), [lid]:{ done:true, score } } }));
  }

  function navigate(s,id=null){ setScreen(s); setLessonId(id); }
  function changeLang(l){ setLang(l); setScreen(null); setTab("home"); }

  const L=LANGUAGES[lang]; const T=THEMES[theme];

  function renderContent(){
    if(screen==="lesson"&&lessonId) return <LessonScreen lang={lang} lessonId={lessonId} onBack={()=>setScreen(null)} onComplete={handleComplete} theme={theme}/>;
    if(screen==="chat") return <ChatScreen lang={lang} theme={theme}/>;
    if(tab==="home") return <HomeScreen progress={progress} lang={lang} onNavigate={navigate} theme={theme}/>;
    if(tab==="dict") return <DictionaryScreen lang={lang} theme={theme}/>;
    if(tab==="chat") return <ChatScreen lang={lang} theme={theme}/>;
    return null;
  }

  const tabs=[{id:"home",icon:"📚",label:"Уроки"},{id:"chat",icon:"🤖",label:"Практика"},{id:"dict",icon:"📖",label:"Словарь"}];

  return (
    <div style={{ minHeight:"100vh", background:T.bg, color:T.text, fontFamily:"'Georgia',serif", maxWidth:480, margin:"0 auto" }}>
      {showWelcome&&<WelcomeScreen onClose={()=>setShowWelcome(false)} theme={theme}/>}
      <div style={{ background:T.header, borderBottom:`1px solid ${T.border}`, padding:"11px 16px", display:"flex", alignItems:"center", gap:10 }}>
        {screen&&<button onClick={()=>setScreen(null)} style={{ background:"none", border:"none", color:L.color, fontSize:18, cursor:"pointer", padding:0 }}>←</button>}
        <div style={{ width:32, height:32, borderRadius:9, background:`linear-gradient(135deg,#6366f1,#8b5cf6)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🌍</div>
        <div>
          <div style={{ fontSize:14, fontWeight:"bold", color:T.text }}>ЯзыкПро</div>
          <div style={{ fontSize:10, color:T.subtext }}>Учи языки с ИИ</div>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:7 }}>
          <button onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:18, padding:"4px 9px", color:T.subtext, fontSize:14, cursor:"pointer" }}>{theme==="dark"?"☀️":"🌙"}</button>
          <button onClick={()=>setShowWelcome(true)} style={{ background:"none", border:"none", color:T.subtext, fontSize:16, cursor:"pointer" }}>?</button>
        </div>
      </div>
      {!screen&&<LangSelector current={lang} onSelect={changeLang} theme={theme}/>}
      <div style={{ paddingBottom:70 }}>{renderContent()}</div>
      {!screen&&(
        <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.header, borderTop:`1px solid ${T.border}`, display:"flex" }}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{ flex:1, padding:"10px 0", background:"none", border:"none", cursor:"pointer", color:tab===t.id?"#6366f1":T.subtext, display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
              <span style={{ fontSize:19 }}>{t.icon}</span>
              <span style={{ fontSize:9, fontFamily:"inherit" }}>{t.label}</span>
            </button>
          ))}
        </div>
      )}
      <style>{`@keyframes slideDown{from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}*{box-sizing:border-box;}::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:#2a3050;}`}</style>
    </div>
  );
}
