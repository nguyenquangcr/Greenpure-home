import { Open_Sans } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const titleWebsite = "Green Pure House";
const descriptionWebsite =
  "Green Pure House là một trang web chuyên cung cấp thông tin và đặt phòng homestay tại các địa điểm xanh trong tự nhiên. Trang web này tập trung vào việc giới thiệu và thúc đẩy lối sống gần gũi với thiên nhiên và bảo vệ môi trường. Green Pure House cung cấp một bộ sưu tập các homestay độc đáo và xanh mát, nằm trong các khu vực gần với cảnh quan thiên nhiên tuyệt đẹp như rừng, núi, biển hay vùng quê yên bình. Các homestay được lựa chọn kỹ càng và thường có kiến trúc đồng bộ với môi trường xung quanh, tạo không gian lý tưởng để du khách thư giãn và tái tạo năng lượng. Trang web cung cấp thông tin chi tiết về từng homestay, bao gồm hình ảnh, mô tả về tiện nghi, dịch vụ và các hoạt động gần đó. Du khách có thể dễ dàng tìm hiểu và so sánh các homestay khác nhau để chọn lựa điểm đến phù hợp với sở thích và nhu cầu của mình. Ngoài việc cung cấp thông tin về homestay, Green Pure House cũng chia sẻ những bài viết và tin tức về lối sống bền vững, bảo vệ môi trường và những hoạt động liên quan đến việc tận hưởng thiên nhiên. Điều này giúp khách hàng có thêm thông tin và kiến thức về quan tâm của trang web và cũng khuyến khích họ tham gia vào những hoạt động bảo vệ môi trường.Green Pure House tạo ra một nền tảng trực tuyến thuận tiện và tin cậy cho du khách muốn khám phá và trải nghiệm homestay xanh mát. Với sự kết hợp giữa thông tin chi tiết, hình ảnh hấp dẫn và tư vấn chuyên nghiệp, trang web này đóng vai trò là một nguồn thông tin quan trọng và đáng tin cậy cho việc lựa chọn homestay gần gũi với thiên nhiên.";
const keywords =
  "green pure house, green pure, Green Pure House, Homestay Green Pure, Khách sạn green purehosue";

export const metadata = {
  title: titleWebsite,
  description: descriptionWebsite,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"
        />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/footer/logo.svg" />
      </header>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M4PEFENN4B"
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M4PEFENN4B');`,
        }}
      />
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
