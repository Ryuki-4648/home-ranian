import Head from 'next/head'
import Image from 'next/image'
import wordList from '../wordList.json'
import Header from '@/components/header'
import { useState } from 'react'

type WordList = {
  id: number;
  word: string;
}

// 名前を入力してボタンをクリックすると、入力値＋褒め言葉が表示する
// const onClickButton = () => {
//   const homeText = document.querySelector('.js-word');
//   if (homeText) {
//     const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
//     homeText.textContent = randomWord.word;
//   }

//   const yourName = document.querySelector('.js-your-name');
//   if (yourName) {
//     const inputName = document.querySelector('.c-input-area') as HTMLInputElement;
//     if (inputName) {
//       yourName.textContent = inputName.value;
//     }
//   }
// }

// リセットをクリックすると、入力値をリセットする
// const onClickResetLink = () => {
//   const homeText = document.querySelector('.js-word');
//   if (homeText) {
//     homeText.textContent = '';
//   }
//   const yourName = document.querySelector('.js-your-name');
//   if (yourName) {
//     yourName.textContent = '名前を入れてボタンをクリックしてください。';
//   }
//   const inputName = document.querySelector('.c-input-area') as HTMLInputElement;
//   if (inputName) {
//     inputName.value = '';
//   }
// }

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
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

        <div className="l-bottom">
          <div className="l-bottom__link">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform" target="_blank">お問い合わせ</a>
            <a href="/privacy/">プライバシーポリシー</a>
          </div>
          <small className="c-text__copyright">&copy; 2023 ほめらにあん。 by R.YUKI Portfolio</small>
        </div>
      </main>
    </>
  )
}
