import { useState, useEffect, useRef } from "react";
import { LANGUAGES, LESSONS, LANG_LIST } from "./lessons.js";

function save(p) { try { localStorage.setItem("yzp_v2", JSON.stringify(p)); } catch(e) {} }
function load() { try { const s=localStorage.getItem("yzp_v2"); return s?JSON.parse(s):null; } catch(e) { return null; } }

const THEMES = {
  dark: { bg:"#0a0e1a", card:"#151c30", border:"#2a3050", text:"#e8eaf0", subtext:"#6b7db3", header:"#0d1220", input:"#0d1220" },
  light: { bg:"#f0f4ff", card:"#ffffff", border:"#d0d8f0", text:"#1a2040", subtext:"#5566aa", header:"#e8edf8", input:"#f5f7ff" }
};

const LEVEL_COLORS = { A1:"#4ade80", A2:"#22d3ee", B1:"#f59e0b", B2:"#f97316", C1:"#e85d4a", C2:"#a855f7" };

const ACHIEVEMENTS = [
  { id:"first_lesson", icon:"🌟", title:"Первый урок!", desc:"Завершить первый урок", check:(p)=>getTotalDone(p)>=1 },
  { id:"five_lessons", icon:"📚", title:"Прилежный студент", desc:"Завершить 5 уроков", check:(p)=>getTotalDone(p)>=5 },
  { id:"ten_lessons", icon:"🎓", title:"Академик", desc:"Завершить 10 уроков", check:(p)=>getTotalDone(p)>=10 },
  { id:"all_lang", icon:"🌍", title:"Полиглот", desc:"Начать все 3 языка", check:(p)=>LANG_LIST.filter(l=>Object.keys(p[l]||{}).length>0).length>=3 },
  { id:"perfect", icon:"💎", title:"Перфекционист", desc:"Пройти урок на 100%", check:(p)=>LANG_LIST.some(l=>Object.values(p[l]||{}).some(v=>v.score===100)) },
  { id:"streak3", icon:"🔥", title:"3 дня подряд", desc:"Заниматься 3 дня подряд", check:(p)=>(p.meta?.streak||0)>=3 },
  { id:"streak7", icon:"⚡", title:"Неделя!", desc:"7 дней подряд", check:(p)=>(p.meta?.streak||0)>=7 },
  { id:"b1_reached", icon:"🏆", title:"Уровень B1", desc:"Дойти до уровня B1", check:(p)=>LANG_LIST.some(l=>Object.keys(p[l]||{}).some(id=>LESSONS[l]?.find(ls=>ls.id===id&&ls.level==="B1"&&p[l][id]?.done))) },
  { id:"chat_user", icon:"🤖", title:"Разговорчивый", desc:"Написать ИИ-собеседнику", check:(p)=>p.meta?.chatUsed },
  { id:"vocab100", icon:"📖", title:"Словарный запас", desc:"Изучить 100 слов", check:(p)=>getTotalWords(p)>=100 },
];

function getTotalDone(p) { return LANG_LIST.reduce((acc,l)=>acc+Object.values(p[l]||{}).filter(v=>v.done).length,0); }
function getTotalWords(p) { return LANG_LIST.reduce((acc,l)=>{ const done=Object.keys(p[l]||{}).filter(k=>p[l][k].done); return acc+done.reduce((a,id)=>{ const ls=LESSONS[l]?.find(x=>x.id===id); return a+(ls?.words?.length||0); },0); },0); }

function ProgressBar({ value, max, color="#6366f1", theme }) {
  const T=THEMES[theme];
  return <div style={{ background:T.border, borderRadius:6, height:8, overflow:"hidden" }}><div style={{ width:`${Math.min(100,max>0?(value/max)*100:0)}%`, height:"100%", background:color, borderRadius:6, transition:"width 0.5s" }} /></div>;
}

function AchievementPopup({ ach, onClose }) {
  useEffect(()=>{ const t=setTimeout(onClose,3500); return()=>clearTimeout(t); },[]);
  return (
    <div style={{ position:"fixed", top:80, left:"50%", transform:"translateX(-50%)", zIndex:999, background:"linear-gradient(135deg,#1a1040,#0d0820)", border:"1px solid #a855f7", borderRadius:18, padding:"14px 20px", display:"flex", alignItems:"center", gap:12, boxShadow:"0 8px 32px rgba(168,85,247,0.5)", animation:"slideDown 0.4s ease", maxWidth:320, width:"90%" }}>
      <div style={{ fontSize:36 }}>{ach.icon}</div>
      <div>
        <div style={{ fontSize:11, color:"#a855f7", textTransform:"uppercase", letterSpacing:1 }}>Достижение!</div>
        <div style={{ fontSize:15, fontWeight:"bold", color:"#fff" }}>{ach.title}</div>
        <div style={{ fontSize:12, color:"#8877aa" }}>{ach.desc}</div>
      </div>
    </div>
  );
}

function WelcomeScreen({ onClose, theme }) {
  const T=THEMES[theme]; const [step,setStep]=useState(0);
  const steps=[
    { icon:"🌍", title:"ЯзыкПро", text:"Английский, немецкий и французский — от нуля до C1. Уроки для любого уровня!" },
    { icon:"🎯", title:"Выбери свой уровень", text:"Новичок? Начни с A1. Уже знаешь язык? Прыгай сразу на B2 или C1 — уроки не заблокированы после базы." },
    { icon:"✏️", title:"Разные форматы задач", text:"Выбор варианта, ввод ответа, перевод фраз. Учёба через практику — самый эффективный метод." },
    { icon:"🤖", title:"ИИ-собеседник", text:"Практикуй живой разговор. ИИ исправляет ошибки, объясняет грамматику и отвечает на любые вопросы." },
    { icon:"🏆", title:"Достижения и серия дней", text:"Зарабатывай награды, поддерживай серию и следи за прогрессом. Прогресс сохраняется автоматически!" },
  ];
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.93)", zIndex:1000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:22, padding:28, maxWidth:360, width:"100%" }}>
        <div style={{ textAlign:"center", marginBottom:24 }}>
          <div style={{ fontSize:52, marginBottom:12 }}>{steps[step].icon}</div>
          <div style={{ fontSize:20, fontWeight:"bold", color:T.text, marginBottom:8 }}>{steps[step].title}</div>
          <div style={{ fontSize:14, color:T.subtext, lineHeight:1.65 }}>{steps[step].text}</div>
        </div>
        <div style={{ display:"flex", gap:5, justifyContent:"center", marginBottom:22 }}>
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
  const totalWords=lessons.filter(l=>lp[l.id]?.done).reduce((acc,l)=>acc+(l.words?.length||0),0);
  const groups=[...new Set(lessons.map(l=>l.level))];

  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      {/* Шапка языка */}
      <div style={{ background:`linear-gradient(135deg,${L.color}25,${L.color}08)`, border:`1px solid ${L.color}40`, borderRadius:18, padding:16, marginBottom:14 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <div>
            <div style={{ fontSize:20, fontWeight:"bold", color:T.text }}>{L.flag} {L.name}</div>
            <div style={{ fontSize:12, color:T.subtext }}>Уроков: {completed}/{lessons.length} · Слов: {totalWords}</div>
          </div>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:22, fontWeight:"bold", color:L.color }}>{completed>0?Math.round(completed/lessons.length*100):0}%</div>
            <div style={{ fontSize:10, color:T.subtext }}>прогресс</div>
          </div>
        </div>
        <ProgressBar value={completed} max={lessons.length} color={L.color} theme={theme}/>
      </div>

      {/* ИИ-собеседник */}
      <button onClick={()=>onNavigate("chat")} style={{ width:"100%", marginBottom:14, padding:"13px 16px", background:"linear-gradient(135deg,#1a1535,#0d1025)", border:"1px solid #6366f1", borderRadius:16, cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:12, textAlign:"left" }}>
        <div style={{ width:42, height:42, borderRadius:11, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>🤖</div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:14, fontWeight:"bold", color:"#fff", marginBottom:1 }}>ИИ-собеседник</div>
          <div style={{ fontSize:12, color:"#6b7db3" }}>Практикуй живой разговор · ИИ исправляет ошибки</div>
        </div>
        <span style={{ color:"#6366f1", fontSize:18 }}>→</span>
      </button>

      {/* Уроки по уровням */}
      {groups.map(level=>{
        const levelLessons=lessons.filter(l=>l.level===level);
        return (
          <div key={level} style={{ marginBottom:16 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
              <div style={{ background:LEVEL_COLORS[level]||"#6366f1", borderRadius:8, padding:"3px 10px", fontSize:12, fontWeight:"bold", color:"#fff" }}>{level}</div>
              <div style={{ fontSize:12, color:T.subtext }}>{levelLessons.filter(l=>lp[l.id]?.done).length}/{levelLessons.length} пройдено</div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
              {levelLessons.map(lesson=>{
                const done=lp[lesson.id]?.done;
                const score=lp[lesson.id]?.score||0;
                return (
                  <button key={lesson.id} onClick={()=>onNavigate("lesson",lesson.id)} style={{ background:T.card, border:`1px solid ${done?"#4ade80":T.border}`, borderRadius:13, padding:"12px 14px", textAlign:"left", cursor:"pointer", color:T.text, display:"flex", alignItems:"center", gap:12, transition:"all 0.2s" }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=L.color} onMouseLeave={e=>e.currentTarget.style.borderColor=done?"#4ade80":T.border}>
                    <div style={{ width:40, height:40, borderRadius:10, background:done?`rgba(74,222,128,0.15)`:`${L.color}15`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>
                      {done?"✅":lesson.emoji}
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ fontSize:13, fontWeight:"bold", marginBottom:1 }}>{lesson.title}</div>
                      <div style={{ fontSize:11, color:T.subtext }}>{lesson.description}</div>
                      {done&&<div style={{ fontSize:11, color:"#4ade80", marginTop:2 }}>✓ {score}% · {lesson.words?.length||0} слов</div>}
                    </div>
                    <span style={{ color:done?"#4ade80":L.color, fontSize:16 }}>→</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LessonScreen({ lang, lessonId, onBack, onComplete, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const lesson=LESSONS[lang]?.find(l=>l.id===lessonId);
  const [phase,setPhase]=useState("theory");
  const [qIdx,setQIdx]=useState(0);
  const [answer,setAnswer]=useState("");
  const [result,setResult]=useState(null);
  const [correct,setCorrect]=useState(0);
  const [showHint,setShowHint]=useState(false);
  const [wrongAnswers,setWrongAnswers]=useState([]);

  if(!lesson) return null;
  const q=lesson.questions[qIdx];
  const levelColor=LEVEL_COLORS[lesson.level]||"#6366f1";

  function checkAnswer() {
    const userAns=answer.trim().toLowerCase().replace(/[.,!?']/g,"").replace(/\s+/g," ");
    const correctAns=(q.answer||"").toLowerCase().replace(/[.,!?']/g,"").replace(/\s+/g," ");
    const isOk=userAns===correctAns||(q.type==="choice"&&answer===q.answer);
    setResult(isOk?"correct":"wrong");
    if(isOk) setCorrect(c=>c+1);
    else setWrongAnswers(w=>[...w,{q:q.q,correct:q.answer}]);
  }

  function next() {
    const isLast=qIdx>=lesson.questions.length-1;
    const finalCorrect=correct+(result==="correct"?1:0);
    if(isLast){ const score=Math.round(finalCorrect/lesson.questions.length*100); setPhase("result"); onComplete(lang,lessonId,score); }
    else { setQIdx(q=>q+1); setAnswer(""); setResult(null); setShowHint(false); }
  }

  if(phase==="theory") return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
      <button onClick={onBack} style={{ background:"none", border:"none", color:L.color, fontSize:14, cursor:"pointer", marginBottom:12, padding:0 }}>← Назад</button>
      <div style={{ textAlign:"center", marginBottom:18 }}>
        <div style={{ fontSize:52, marginBottom:8 }}>{lesson.emoji}</div>
        <div style={{ fontSize:18, fontWeight:"bold", color:T.text, marginBottom:4 }}>{lesson.title}</div>
        <div style={{ display:"inline-block", background:levelColor+"20", border:`1px solid ${levelColor}40`, borderRadius:10, padding:"3px 10px", fontSize:12, color:levelColor, marginBottom:4 }}>{lesson.level}</div>
        <div style={{ fontSize:12, color:T.subtext }}>{lesson.questions.length} заданий · {lesson.words?.length||0} слов</div>
      </div>
      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:16, padding:16, marginBottom:14 }}>
        <div style={{ fontSize:13, fontWeight:"bold", color:T.text, marginBottom:10 }}>📖 Теория и правила:</div>
        <div style={{ fontSize:13, color:T.subtext, lineHeight:2.0, whiteSpace:"pre-line" }}>{lesson.theory}</div>
      </div>
      {lesson.words?.length>0&&(
        <div style={{ marginBottom:16 }}>
          <div style={{ fontSize:13, fontWeight:"bold", color:T.text, marginBottom:10 }}>🗂 Ключевые слова и фразы:</div>
          <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
            {lesson.words.map(w=>(
              <div key={w.word} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:12, padding:"10px 13px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                  <span style={{ fontSize:14, fontWeight:"bold", color:L.color }}>{w.word}</span>
                  <span style={{ fontSize:13, color:T.text }}>{w.translation}</span>
                </div>
                <div style={{ fontSize:12, color:T.subtext, fontStyle:"italic" }}>{w.example}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={()=>setPhase("practice")} style={{ width:"100%", padding:14, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:14, color:"#fff", fontSize:15, cursor:"pointer", fontWeight:"bold", fontFamily:"inherit" }}>
        Начать практику ({lesson.questions.length} заданий) →
      </button>
    </div>
  );

  if(phase==="practice") return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
      <div style={{ marginBottom:12 }}>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
          <span style={{ fontSize:13, fontWeight:"bold", color:T.text }}>{lesson.emoji} {lesson.title}</span>
          <span style={{ fontSize:12, color:T.subtext }}>{qIdx+1}/{lesson.questions.length} · ✓ {correct}</span>
        </div>
        <ProgressBar value={qIdx} max={lesson.questions.length} color={L.color} theme={theme}/>
      </div>

      <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:16, padding:16, marginBottom:12 }}>
        <div style={{ fontSize:12, color:T.subtext, marginBottom:6, textTransform:"uppercase", letterSpacing:0.5 }}>
          {q.type==="choice"?"Выбери правильный ответ":"Введи ответ"}
        </div>
        <div style={{ fontSize:15, color:T.text, lineHeight:1.6, fontWeight:"500" }}>{q.q}</div>
      </div>

      {q.type==="choice"?(
        <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:12 }}>
          {q.options.map(opt=>{ const isSel=answer===opt; const isCorr=result&&opt===q.answer; const isWrong=result&&isSel&&opt!==q.answer;
            return <button key={opt} onClick={()=>!result&&setAnswer(opt)} style={{ padding:"12px 15px", borderRadius:12, border:`2px solid ${isCorr?"#4ade80":isWrong?"#f87171":isSel?L.color:T.border}`, background:isCorr?"rgba(74,222,128,0.12)":isWrong?"rgba(248,113,113,0.12)":isSel?`${L.color}15`:T.card, color:isCorr?"#4ade80":isWrong?"#f87171":T.text, textAlign:"left", cursor:result?"default":"pointer", fontSize:14, fontFamily:"inherit", transition:"all 0.15s", fontWeight:isSel?"600":"400" }}>{opt}</button>;
          })}
        </div>
      ):(
        <div style={{ marginBottom:12 }}>
          <input value={answer} onChange={e=>setAnswer(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!result&&answer&&checkAnswer()} placeholder="Введи ответ..." disabled={!!result}
            style={{ width:"100%", padding:"13px 15px", background:T.input, border:`2px solid ${result==="correct"?"#4ade80":result==="wrong"?"#f87171":T.border}`, borderRadius:12, color:T.text, fontSize:15, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/>
          {!result&&q.hint&&(
            <button onClick={()=>setShowHint(!showHint)} style={{ background:"none", border:"none", color:T.subtext, fontSize:12, cursor:"pointer", marginTop:6, padding:0 }}>
              💡 {showHint?`Подсказка: ${q.hint}`:"Показать подсказку"}
            </button>
          )}
        </div>
      )}

      {!result?(
        <button onClick={checkAnswer} disabled={!answer} style={{ width:"100%", padding:13, background:answer?`linear-gradient(135deg,${L.color},${L.color}cc)`:"#1e2540", border:"none", borderRadius:12, color:"#fff", fontSize:15, cursor:answer?"pointer":"not-allowed", fontFamily:"inherit", fontWeight:"bold" }}>
          Проверить ✓
        </button>
      ):(
        <div>
          <div style={{ padding:14, borderRadius:12, marginBottom:10, background:result==="correct"?"rgba(74,222,128,0.1)":"rgba(248,113,113,0.1)", border:`1px solid ${result==="correct"?"#4ade80":"#f87171"}` }}>
            <div style={{ fontSize:15, fontWeight:"bold", color:result==="correct"?"#4ade80":"#f87171", marginBottom:result==="wrong"?4:0 }}>
              {result==="correct"?"✅ Верно! Отлично!":"❌ Неверно"}
            </div>
            {result==="wrong"&&<div style={{ fontSize:13, color:T.text }}>Правильный ответ: <strong>{q.answer}</strong></div>}
          </div>
          <button onClick={next} style={{ width:"100%", padding:13, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:12, color:"#fff", fontSize:15, cursor:"pointer", fontFamily:"inherit", fontWeight:"bold" }}>
            {qIdx<lesson.questions.length-1?"Следующий →":"Завершить урок ✓"}
          </button>
        </div>
      )}
    </div>
  );

  if(phase==="result") {
    const finalCorrect=correct+(result==="correct"?1:0);
    const total=lesson.questions.length;
    const sc=Math.round(finalCorrect/total*100);
    return (
      <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
        <div style={{ textAlign:"center", padding:"20px 0 16px" }}>
          <div style={{ fontSize:60, marginBottom:10 }}>{sc>=90?"🏆":sc>=70?"🎉":sc>=50?"👍":"📚"}</div>
          <div style={{ fontSize:26, fontWeight:"bold", color:T.text, marginBottom:4 }}>{sc}%</div>
          <div style={{ fontSize:14, color:T.subtext, marginBottom:4 }}>Правильных: {finalCorrect} из {total}</div>
          <div style={{ display:"inline-block", background:LEVEL_COLORS[lesson.level]+"20", border:`1px solid ${LEVEL_COLORS[lesson.level]}40`, borderRadius:10, padding:"3px 10px", fontSize:12, color:LEVEL_COLORS[lesson.level] }}>{lesson.level} · {lesson.title}</div>
        </div>
        {wrongAnswers.length>0&&(
          <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:14, marginBottom:14 }}>
            <div style={{ fontSize:13, fontWeight:"bold", color:"#f87171", marginBottom:8 }}>❌ Ошибки — повтори:</div>
            {wrongAnswers.map((w,i)=>(
              <div key={i} style={{ marginBottom:8, paddingBottom:8, borderBottom:i<wrongAnswers.length-1?`1px solid ${T.border}`:"none" }}>
                <div style={{ fontSize:12, color:T.subtext, marginBottom:2 }}>{w.q}</div>
                <div style={{ fontSize:13, color:"#4ade80" }}>✓ {w.correct}</div>
              </div>
            ))}
          </div>
        )}
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={()=>{setPhase("theory");setQIdx(0);setAnswer("");setResult(null);setCorrect(0);setWrongAnswers([]);}} style={{ flex:1, padding:13, background:"transparent", border:`1px solid ${T.border}`, borderRadius:12, color:T.subtext, cursor:"pointer", fontFamily:"inherit" }}>🔄 Повторить</button>
          <button onClick={onBack} style={{ flex:1, padding:13, background:`linear-gradient(135deg,${L.color},${L.color}cc)`, border:"none", borderRadius:12, color:"#fff", cursor:"pointer", fontFamily:"inherit", fontWeight:"bold" }}>← К урокам</button>
        </div>
      </div>
    );
  }
}

function ChatScreen({ lang, onChatUsed, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const [messages,setMessages]=useState([
    { role:"assistant", text:`${L.flag} Привет! Я твой ИИ-собеседник для практики ${L.name.toLowerCase()} языка.\n\nМогу помочь с:\n• Разговорной практикой\n• Объяснением грамматики\n• Переводом и примерами\n• Исправлением ошибок\n\nС чего начнём? 😊` }
  ]);
  const [input,setInput]=useState(""); const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:"smooth"}); },[messages]);

  const QUICK = {
    en:["Explain Present Perfect","How do I use 'would'?","Practice: introduce yourself","What's the difference: say vs tell?"],
    de:["Erkläre die deutschen Artikel","Wie benutze ich Konjunktiv II?","Üben wir: sich vorstellen","Was ist der Unterschied: können vs dürfen?"],
    fr:["Explique le Subjonctif","Comment utiliser le Passé Composé?","Pratique: se présenter","Quelle est la différence: être vs avoir?"],
  };

  async function send(text) {
    const msg=text||input.trim(); if(!msg||loading) return;
    setInput(""); setMessages(m=>[...m,{role:"user",text:msg}]); setLoading(true);
    onChatUsed();
    try {
      const history=messages.slice(-10).map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}));
      const resp=await fetch("/api/chat",{ method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"claude-haiku-4-5-20251001", max_tokens:700,
          system:`Ты дружелюбный и опытный языковой партнёр для изучения ${L.name} языка.

ПРАВИЛА:
1. Основной язык ответа: если вопрос по-русски — отвечай по-русски + дай пример на ${L.name}
2. Если ученик пишет на ${L.name} — отвечай на ${L.name}, но исправляй ошибки
3. Исправляй ошибки мягко: "Почти! Правильно: [исправление] — потому что [объяснение]"
4. Используй простые примеры и аналогии
5. После ответа задай один короткий вопрос для продолжения
6. Давай практические лайфхаки для запоминания
7. Максимум 200 слов
8. Используй эмодзи для наглядности
9. Уровни: A1-C2, адаптируй сложность`,
          messages:[...history,{role:"user",content:msg}]
        })
      });
      const data=await resp.json();
      let text2="Нет ответа";
      if(data.content?.length>0) text2=data.content.map(b=>b.text||"").join("").trim();
      else if(data.error) text2="Ошибка: "+JSON.stringify(data.error).slice(0,100);
      setMessages(m=>[...m,{role:"assistant",text:text2}]);
    } catch(e) { setMessages(m=>[...m,{role:"assistant",text:"Ошибка подключения. Попробуй снова."}]); }
    setLoading(false);
  }

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"calc(100vh - 175px)" }}>
      <div style={{ padding:"10px 16px 8px", borderBottom:`1px solid ${T.border}` }}>
        <div style={{ fontSize:14, fontWeight:"bold", color:T.text }}>{L.flag} ИИ-собеседник — {L.name}</div>
        <div style={{ fontSize:11, color:T.subtext }}>Практика · Грамматика · Исправление ошибок</div>
      </div>
      {messages.length<=1&&(
        <div style={{ padding:"10px 16px 0", display:"flex", gap:6, flexWrap:"wrap" }}>
          {(QUICK[lang]||[]).map(q=>(
            <button key={q} onClick={()=>send(q)} style={{ padding:"6px 11px", borderRadius:16, border:`1px solid ${T.border}`, background:"transparent", color:T.subtext, fontSize:11, cursor:"pointer", fontFamily:"inherit", marginBottom:4 }}>{q}</button>
          ))}
        </div>
      )}
      <div style={{ flex:1, overflowY:"auto", padding:"12px 16px", display:"flex", flexDirection:"column", gap:10 }}>
        {messages.map((m,i)=>(
          <div key={i} style={{ display:"flex", justifyContent:m.role==="user"?"flex-end":"flex-start" }}>
            <div style={{ maxWidth:"88%", padding:"10px 14px", borderRadius:m.role==="user"?"16px 16px 4px 16px":"4px 16px 16px 16px",
              background:m.role==="user"?`linear-gradient(135deg,${L.color},${L.color}cc)`:T.card,
              border:m.role==="user"?"none":`1px solid ${T.border}`,
              color:m.role==="user"?"#fff":T.text, fontSize:13, lineHeight:1.7, whiteSpace:"pre-wrap" }}>
              {(m.text||"")}
            </div>
          </div>
        ))}
        {loading&&<div style={{ display:"flex" }}><div style={{ padding:"10px 16px", borderRadius:"4px 16px 16px 16px", background:T.card, border:`1px solid ${T.border}`, color:T.subtext, fontSize:13 }}>✍️ Печатает...</div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{ padding:"10px 16px 14px", borderTop:`1px solid ${T.border}`, display:"flex", gap:8 }}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&!e.shiftKey&&input.trim()&&send()} placeholder={`Напиши на ${L.name.toLowerCase()} или по-русски...`}
          style={{ flex:1, padding:"11px 14px", background:T.input, border:`1px solid ${T.border}`, borderRadius:24, color:T.text, fontSize:14, outline:"none", fontFamily:"inherit" }}/>
        <button onClick={()=>send()} disabled={!input.trim()||loading} style={{ width:44, height:44, borderRadius:"50%", background:input.trim()&&!loading?`linear-gradient(135deg,${L.color},${L.color}cc)`:"#1e2540", border:"none", cursor:input.trim()&&!loading?"pointer":"default", fontSize:18, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" }}>→</button>
      </div>
    </div>
  );
}

function DictionaryScreen({ lang, theme }) {
  const T=THEMES[theme]; const L=LANGUAGES[lang];
  const [flipped,setFlipped]=useState(null);
  const [search,setSearch]=useState("");
  const allWords=(LESSONS[lang]||[]).flatMap(l=>l.words||[]);
  const filtered=allWords.filter(w=>!search||w.word.toLowerCase().includes(search.toLowerCase())||w.translation.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      <div style={{ fontSize:16, fontWeight:"bold", color:T.text, marginBottom:2 }}>📖 Словарь — {L.flag} {L.name}</div>
      <div style={{ fontSize:12, color:T.subtext, marginBottom:12 }}>{allWords.length} слов и фраз</div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍 Поиск слова или перевода..."
        style={{ width:"100%", padding:"10px 13px", background:T.input, border:`1px solid ${T.border}`, borderRadius:12, color:T.text, fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit", marginBottom:12 }}/>
      <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
        {filtered.map((w,i)=>(
          <div key={i} onClick={()=>setFlipped(flipped===i?null:i)} style={{ background:T.card, border:`2px solid ${flipped===i?L.color:T.border}`, borderRadius:13, padding:"11px 14px", cursor:"pointer", transition:"all 0.2s" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:15, fontWeight:"bold", color:L.color }}>{w.word}</span>
              <span style={{ fontSize:13, color:T.text }}>{w.translation}</span>
            </div>
            {flipped===i&&w.example&&<div style={{ marginTop:8, fontSize:12, color:T.subtext, fontStyle:"italic", borderTop:`1px solid ${T.border}`, paddingTop:8 }}>💬 {w.example}</div>}
          </div>
        ))}
        {filtered.length===0&&<div style={{ textAlign:"center", color:T.subtext, fontSize:14, padding:30 }}>Ничего не найдено</div>}
      </div>
    </div>
  );
}

function AchievementsScreen({ progress, theme }) {
  const T=THEMES[theme];
  const unlocked=ACHIEVEMENTS.filter(a=>a.check(progress));
  const locked=ACHIEVEMENTS.filter(a=>!a.check(progress));
  const totalDone=getTotalDone(progress);
  const totalWords=getTotalWords(progress);
  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 130px)" }}>
      <div style={{ fontSize:18, fontWeight:"bold", color:T.text, marginBottom:3 }}>🏆 Достижения</div>
      <div style={{ fontSize:13, color:T.subtext, marginBottom:12 }}>{unlocked.length}/{ACHIEVEMENTS.length} · Уроков: {totalDone} · Слов: {totalWords}</div>
      <div style={{ marginBottom:14 }}><ProgressBar value={unlocked.length} max={ACHIEVEMENTS.length} color="#a855f7" theme={theme}/></div>
      {(progress.meta?.streak||0)>0&&(
        <div style={{ background:"rgba(245,158,11,0.1)", border:"1px solid rgba(245,158,11,0.3)", borderRadius:14, padding:"12px 14px", marginBottom:14, display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ fontSize:24 }}>🔥</span>
          <div>
            <div style={{ fontSize:14, fontWeight:"bold", color:"#f59e0b" }}>{progress.meta.streak} {progress.meta.streak===1?"день":progress.meta.streak<5?"дня":"дней"} подряд!</div>
            <div style={{ fontSize:12, color:T.subtext }}>Продолжай заниматься каждый день</div>
          </div>
        </div>
      )}
      {unlocked.length>0&&<>
        <div style={{ fontSize:12, color:"#4ade80", marginBottom:8, textTransform:"uppercase", letterSpacing:1 }}>✅ Получено ({unlocked.length})</div>
        <div style={{ display:"flex", flexDirection:"column", gap:7, marginBottom:14 }}>
          {unlocked.map(a=>(
            <div key={a.id} style={{ background:"rgba(74,222,128,0.08)", border:"1px solid rgba(74,222,128,0.3)", borderRadius:13, padding:"11px 14px", display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:28 }}>{a.icon}</span>
              <div><div style={{ fontSize:13, fontWeight:"bold", color:T.text }}>{a.title}</div><div style={{ fontSize:12, color:"#4ade80" }}>{a.desc}</div></div>
            </div>
          ))}
        </div>
      </>}
      <div style={{ fontSize:12, color:T.subtext, marginBottom:8, textTransform:"uppercase", letterSpacing:1 }}>🔒 Не получено ({locked.length})</div>
      <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
        {locked.map(a=>(
          <div key={a.id} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:13, padding:"11px 14px", display:"flex", alignItems:"center", gap:12, opacity:0.5 }}>
            <span style={{ fontSize:28, filter:"grayscale(1)" }}>{a.icon}</span>
            <div><div style={{ fontSize:13, color:T.subtext }}>{a.title}</div><div style={{ fontSize:12, color:T.border }}>{a.desc}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatsScreen({ progress, theme }) {
  const T=THEMES[theme];
  const totalDone=getTotalDone(progress);
  const totalWords=getTotalWords(progress);
  const unlocked=ACHIEVEMENTS.filter(a=>a.check(progress)).length;
  return (
    <div style={{ padding:"14px 16px", overflowY:"auto", maxHeight:"calc(100vh - 175px)" }}>
      <div style={{ fontSize:17, fontWeight:"bold", color:T.text, marginBottom:14 }}>📊 Мой прогресс</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:16 }}>
        {[
          { v:totalDone, l:"Уроков пройдено", c:"#6366f1", i:"📚" },
          { v:totalWords, l:"Слов изучено", c:"#10b981", i:"📖" },
          { v:unlocked, l:"Достижений", c:"#f59e0b", i:"🏆" },
          { v:progress.meta?.streak||0, l:"Дней подряд", c:"#f97316", i:"🔥" },
        ].map((s,i)=>(
          <div key={i} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:14, textAlign:"center" }}>
            <div style={{ fontSize:24 }}>{s.i}</div>
            <div style={{ fontSize:22, fontWeight:"bold", color:s.c, marginTop:4 }}>{s.v}</div>
            <div style={{ fontSize:11, color:T.subtext, marginTop:2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      {LANG_LIST.map(id=>{
        const L=LANGUAGES[id];
        const lessons=LESSONS[id]||[];
        const done=lessons.filter(l=>progress[id]?.[l.id]?.done).length;
        const words=lessons.filter(l=>progress[id]?.[l.id]?.done).reduce((a,l)=>a+(l.words?.length||0),0);
        if(done===0) return null;
        return (
          <div key={id} style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:14, padding:14, marginBottom:10 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
              <div style={{ fontSize:14, fontWeight:"bold", color:T.text }}>{L.flag} {L.name}</div>
              <div style={{ fontSize:13, color:L.color, fontWeight:"bold" }}>{done}/{lessons.length} уроков</div>
            </div>
            <ProgressBar value={done} max={lessons.length} color={L.color} theme={theme}/>
            <div style={{ fontSize:12, color:T.subtext, marginTop:6 }}>Слов изучено: {words}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [lang,setLang]=useState("en");
  const [tab,setTab]=useState("home");
  const [screen,setScreen]=useState(null);
  const [lessonId,setLessonId]=useState(null);
  const [showWelcome,setShowWelcome]=useState(false);
  const [popup,setPopup]=useState(null);
  const [theme,setTheme]=useState("dark");
  const [progress,setProgress]=useState(()=>load()||{ en:{}, de:{}, fr:{}, meta:{ streak:0, lastDay:null, chatUsed:false } });

  useEffect(()=>{ save(progress); },[progress]);
  useEffect(()=>{ const s=localStorage.getItem("yzp_welcome"); if(!s){setShowWelcome(true);localStorage.setItem("yzp_welcome","1");} },[]);

  function checkAchievements(newP) {
    const prev=ACHIEVEMENTS.filter(a=>a.check(progress));
    const next=ACHIEVEMENTS.filter(a=>a.check(newP));
    const newOnes=next.filter(a=>!prev.find(p=>p.id===a.id));
    if(newOnes.length>0) setPopup(newOnes[0]);
  }

  function handleComplete(l,lid,score) {
    setProgress(p=>{
      const today=new Date().toDateString();
      const lastDay=p.meta?.lastDay;
      const yesterday=new Date(Date.now()-86400000).toDateString();
      const streak=lastDay===today?(p.meta?.streak||1):lastDay===yesterday?(p.meta?.streak||0)+1:1;
      const newP={...p, [l]:{...(p[l]||{}),[lid]:{done:true,score}}, meta:{...(p.meta||{}),lastDay:today,streak}};
      setTimeout(()=>checkAchievements(newP),300);
      return newP;
    });
  }

  function handleChatUsed() {
    setProgress(p=>{ const newP={...p,meta:{...(p.meta||{}),chatUsed:true}}; setTimeout(()=>checkAchievements(newP),300); return newP; });
  }

  function navigate(s,id=null){ setScreen(s); setLessonId(id); }
  function changeLang(l){ setLang(l); setScreen(null); setTab("home"); }

  const L=LANGUAGES[lang]; const T=THEMES[theme];

  function renderContent(){
    if(screen==="lesson"&&lessonId) return <LessonScreen lang={lang} lessonId={lessonId} onBack={()=>setScreen(null)} onComplete={handleComplete} theme={theme}/>;
    if(screen==="chat"||tab==="chat") return <ChatScreen lang={lang} onChatUsed={handleChatUsed} theme={theme}/>;
    if(screen==="achievements") return <AchievementsScreen progress={progress} theme={theme}/>;
    if(tab==="home") return <HomeScreen progress={progress} lang={lang} onNavigate={navigate} theme={theme}/>;
    if(tab==="stats") return <StatsScreen progress={progress} theme={theme}/>;
    if(tab==="dict") return <DictionaryScreen lang={lang} theme={theme}/>;
    return null;
  }

  const tabs=[{id:"home",icon:"📚",label:"Уроки"},{id:"chat",icon:"🤖",label:"Практика"},{id:"dict",icon:"📖",label:"Словарь"},{id:"stats",icon:"📊",label:"Прогресс"}];

  return (
    <div style={{ minHeight:"100vh", background:T.bg, color:T.text, fontFamily:"'Georgia',serif", maxWidth:480, margin:"0 auto" }}>
      {showWelcome&&<WelcomeScreen onClose={()=>setShowWelcome(false)} theme={theme}/>}
      {popup&&<AchievementPopup ach={popup} onClose={()=>setPopup(null)}/>}
      <div style={{ background:T.header, borderBottom:`1px solid ${T.border}`, padding:"11px 16px", display:"flex", alignItems:"center", gap:10 }}>
        {screen&&<button onClick={()=>setScreen(null)} style={{ background:"none", border:"none", color:L.color, fontSize:18, cursor:"pointer", padding:0 }}>←</button>}
        <div style={{ width:32, height:32, borderRadius:9, background:"linear-gradient(135deg,#6366f1,#8b5cf6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>🌍</div>
        <div>
          <div style={{ fontSize:14, fontWeight:"bold", color:T.text }}>ЯзыкПро</div>
          <div style={{ fontSize:10, color:T.subtext }}>Английский · Немецкий · Французский</div>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", gap:7, alignItems:"center" }}>
          <button onClick={()=>navigate("achievements")} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:18, padding:"4px 9px", color:T.subtext, fontSize:14, cursor:"pointer" }}>🏆</button>
          <button onClick={()=>setTheme(t=>t==="dark"?"light":"dark")} style={{ background:"none", border:`1px solid ${T.border}`, borderRadius:18, padding:"4px 9px", color:T.subtext, fontSize:14, cursor:"pointer" }}>{theme==="dark"?"☀️":"🌙"}</button>
          <button onClick={()=>setShowWelcome(true)} style={{ background:"none", border:"none", color:T.subtext, fontSize:16, cursor:"pointer" }}>?</button>
        </div>
      </div>
      {!screen&&<LangSelector current={lang} onSelect={changeLang} theme={theme}/>}
      <div style={{ paddingBottom:70 }}>{renderContent()}</div>
      {!screen&&(
        <div style={{ position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)", width:"100%", maxWidth:480, background:T.header, borderTop:`1px solid ${T.border}`, display:"flex" }}>
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} style={{ flex:1, padding:"10px 0", background:"none", border:"none", cursor:"pointer", color:tab===t.id?"#6366f1":T.subtext, display:"flex", flexDirection:"column", alignItems:"center", gap:2, transition:"color 0.2s" }}>
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
