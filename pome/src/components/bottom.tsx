import Link from "next/link";

export default function Bottom() {
  return (
    <div className="l-bottom">
      <div className="l-bottom__link">
        <Link
          target="_blank"
          href={"https://docs.google.com/forms/d/e/1FAIpQLSe5RJxhW1gDHo5JDDYZaLQrQS8Ip2kTloIIk4l9EhR2yrfHUA/viewform"}>
          お問い合わせ
        </Link>
        <Link
          href={"/home-ranian/privacy.html"}>
          プライバシーポリシー
        </Link>
      </div>
      <small className="c-text__copyright">&copy; 2023 ほめらにあん。 by R.YUKI Portfolio</small>
    </div>
  )
}