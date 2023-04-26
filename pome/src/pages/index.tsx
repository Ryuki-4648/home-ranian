import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@/components/header';
import Bottom from '@/components/bottom';
import wordList from '../wordList.json';

export default function Home() {

  // 褒め言葉・入力値
  const [homeWord, setHomeWord] = useState('');
  const [yourName, setYourName] = useState('');

  // ボタンをクリックしたら褒め言葉がランダムで表示される
  const onClickButton = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setHomeWord(randomWord.word);
  };

  // リセットしたら入力値をリセットする
  const onClickResetLink = () => {
    setHomeWord('');
    setYourName('');
  };

  return (
    <>
      <Head>
        <title>ほめらにあん。 | あなたを褒めるポメラニアン</title>
        <meta name="ほめらにあん。 | 名前を入力してボタンをクリック！あなたを褒めてくれるポメラニアンのWebサービス" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Header />
        
        <div className="l-container">
          <div className="l-word-area">
            <p className="js-your-name c-text__your-name">{yourName || '名前を入れてボタンをクリックしてください。'}</p>
            <p className="js-word c-text__home-word">{homeWord}</p>
          </div>
          <Image
            src="/image01.png"
            alt="ポメラニアンのイラスト"
            width={160}
            height={204}
            priority
            className="c-image"
          />
          <div className="flex-box">
            <input className="c-input-area" type="text" value={yourName} onChange={(e) => setYourName(e.target.value)} placeholder="あなたの名前を入力してください" />
            <div className="button-area">
              <button className="c-button" onClick={onClickButton}>ぽめまるに褒めてもらう</button>
            </div>
            <p className="c-text-reset" onClick={onClickResetLink}>リセットする</p>
          </div>
        </div>

        <Bottom />
      </main>
    </>
  )
}
