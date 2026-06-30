'use client';

import Image from "next/image";
import { useState } from "react";
import { Menu, Search, Type, Languages } from "lucide-react";

type Passage = {
  title: string;
  subtitle: string;
  testament: string;
  data: { n: number; en: string; zh: string; py: string }[];
};

const passages: Record<string, Passage> = {
  john: {
    title: "John 3:16–21",
    subtitle: "約翰福音 3:16–21 · ESV × 和合本（繁體）",
    testament: "New Testament 新約",
    data: [
      { n: 16, en: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.", zh: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。", py: "Shén ài shìrén, shènzhì jiāng tā de dúshēngzǐ cì gěi tāmen, jiào yīqiè xìn tā de, bùzhì mièwáng, fǎn dé yǒngshēng." },
      { n: 17, en: "For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.", zh: "因為神差他的兒子降世，不是要定世人的罪，乃是要叫世人因他得救。", py: "Yīnwèi Shén chāi tā de érzi jiàngshì, búshì yào dìng shìrén de zuì, nǎishì yào jiào shìrén yīn tā dé jiù." },
      { n: 18, en: "Whoever believes in him is not condemned, but whoever does not believe is condemned already, because he has not believed in the name of the only Son of God.", zh: "信他的人，不被定罪；不信的人，罪已經定了，因為他不信神獨生子的名。", py: "Xìn tā de rén, bú bèi dìngzuì; bù xìn de rén, zuì yǐjīng dìng le, yīnwèi tā bù xìn Shén dúshēngzǐ de míng." },
      { n: 19, en: "And this is the judgment: the light has come into the world, and people loved the darkness rather than the light because their works were evil.", zh: "光來到世間，世人因自己的行為是惡的，不愛光，倒愛黑暗，定他們的罪就是在此。", py: "Guāng lái dào shìjiān, shìrén yīn zìjǐ de xíngwéi shì è de, bù ài guāng, dào ài hēi'àn, dìng tāmen de zuì jiù shì zài cǐ." },
      { n: 20, en: "For everyone who does wicked things hates the light and does not come to the light, lest his works should be exposed.", zh: "凡作惡的便恨光，並不來就光，恐怕他的行為受責備。", py: "Fán zuò è de biàn hèn guāng, bìng bù lái jiù guāng, kǒngpà tā de xíngwéi shòu zébèi." },
      { n: 21, en: "But whoever does what is true comes to the light, so that it may be clearly seen that his works have been carried out in God.", zh: "但行真理的必來就光，要顯明他所行的是靠神而行。", py: "Dàn xíng zhēnlǐ de bì lái jiù guāng, yào xiǎnmíng tā suǒ xíng de shì kào Shén ér xíng." },
    ],
  },
  psalm: {
    title: "Psalm 23:1–6",
    subtitle: "詩篇 23:1–6 · ESV × 和合本（繁體）",
    testament: "Old Testament 舊約",
    data: [
      { n: 1, en: "The LORD is my shepherd; I shall not want.", zh: "耶和華是我的牧者，我必不至缺乏。", py: "Yēhéhuá shì wǒ de mùzhě, wǒ bì bùzhì quēfá." },
      { n: 2, en: "He makes me lie down in green pastures. He leads me beside still waters.", zh: "他使我躺臥在青草地上，領我在可安歇的水邊。", py: "Tā shǐ wǒ tǎngwò zài qīngcǎo dì shàng, lǐng wǒ zài kě ānxiē de shuǐ biān." },
      { n: 3, en: "He restores my soul. He leads me in paths of righteousness for his name's sake.", zh: "他使我的靈魂甦醒，為自己的名引導我走義路。", py: "Tā shǐ wǒ de línghún sūxǐng, wèi zìjǐ de míng yǐndǎo wǒ zǒu yì lù." },
    ],
  },
};

export default function Reader() {
  const [book, setBook] = useState("john");
  const [mode, setMode] = useState<"side" | "en" | "zh">("zh");
  const [showPinyin, setShowPinyin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const passage = passages[book];

  return (
    <div className="readerApp">
      {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}
      <aside className={menuOpen ? "drawer open" : "drawer"}>
        <Brand />
        <nav className="nav">
          <button className="active">閱讀 Read</button>
          <button>搜尋 Search</button>
          <button>書籤 Bookmarks</button>
          <button>歷史 History</button>
          <button>設定 Settings</button>
        </nav>
        <Controls mode={mode} setMode={setMode} showPinyin={showPinyin} setShowPinyin={setShowPinyin} />
      </aside>

      <main>
        <header className="readerTop">
          <button className="iconBtn mobileOnly" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
          <select value={book} onChange={(e) => setBook(e.target.value)}>
            <option value="john">John 約翰福音</option>
            <option value="psalm">Psalm 詩篇</option>
          </select>
          <select><option>3</option></select>
          <div className="spacer" />
          <button className="iconBtn"><Search size={20} /></button>
          <button className="iconBtn"><Type size={20} /></button>
          <button className="iconBtn" onClick={() => setShowPinyin(!showPinyin)}><Languages size={20} /></button>
        </header>

        <section className={`passage mode-${mode}`}>
          <div className="heading">
            <h1>{passage.title}</h1>
            <span>{passage.subtitle}</span>
          </div>
          <div className="testament">{passage.testament}</div>
          {passage.data.map((v) => (
            <div className="verse" key={v.n}>
              <div className="num">{v.n}</div>
              <div className="verseText">
                {(mode === "zh" || mode === "side") && <Chinese v={v} showPinyin={showPinyin} />}
                {(mode === "en" || mode === "side") && <English v={v} />}
                {mode === "zh" && <English v={v} />}
                {mode === "en" && <Chinese v={v} showPinyin={showPinyin} />}
              </div>
            </div>
          ))}
          <p className="copyright">
            ESV® Text Edition: 2016. Copyright © 2001 by Crossway Bibles, a publishing ministry of Good News Publishers. Chinese text shown here is sample prototype text for layout testing.
          </p>
        </section>
      </main>
    </div>
  );
}

function Brand() {
  return (
    <div className="brandLockup">
      <Image src="/logo/tongdao-mark.svg" alt="" width={44} height={44} />
      <div><span className="brandCn">同道</span><span className="brandEn">Bible</span></div>
    </div>
  );
}

function Controls({ mode, setMode, showPinyin, setShowPinyin }: any) {
  return (
    <div className="controls">
      <p>Reading order 閱讀順序</p>
      <button className={mode === "side" ? "selected" : ""} onClick={() => setMode("side")}>Side by side 並排</button>
      <button className={mode === "en" ? "selected" : ""} onClick={() => setMode("en")}>English → 中文</button>
      <button className={mode === "zh" ? "selected" : ""} onClick={() => setMode("zh")}>中文 → English</button>
      <button className="toggle" onClick={() => setShowPinyin(!showPinyin)}>Show pinyin 顯示拼音 <span>{showPinyin ? "On" : "Off"}</span></button>
    </div>
  );
}

function Chinese({ v, showPinyin }: any) {
  return <div className="block zh"><p>{v.zh}</p>{showPinyin && <small>{v.py}</small>}</div>;
}

function English({ v }: any) {
  return <div className="block en"><p>{v.en}</p></div>;
}
