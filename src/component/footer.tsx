import Image from "next/image";
import Link from "next/link";

export const Footer = () =>(
<footer className="footer">
    <div className="section">
      <div className="left">
        <div className="brand_address">
          <Image
          className="footer_logo"
            src="/assets/svg/Lumyn Logo White.svg"
            alt="next icon"
            width={210}
            height={50}
          />
          <p>
            Let Lumyn be the spark that ignites your brand's journey.
            We'll help you shine in ways you never thought possible.
          </p>

          <div>
            <Image
              src="/assets/svg/location.svg"
              alt="shop icon"
              width={20}
              height={20}
            />
            <p>New Alsafiyah Building, office SM18B4, Abu Hail, Dubai UAE</p>
          </div>

          <div>
            <Image
              src="/assets/svg/mobile.svg"
              alt="shop icon"
              width={20}
              height={20}
            />
            <a className="cta" href="tel:+971 58 586 7086 " >+971 58 586 7086 </a>
          </div>

          <div>
            <Image
              src="/assets/svg/mail_icon.svg"
              alt="shop icon"
              width={20}
              height={20}
            />
            <p>hello@teamlumyn.com</p>
          </div>
        </div>


        <div className="link_container">
          <div className="main_menu">
            <h4>Learn More</h4>
            <Link href={'/podcast'}>Podcast</Link>
            <Link href={'/products'}>Shop</Link>
            <Link href={'/blogs'}>Blog</Link>
            <Link href={'/frequently-asked-questions'}>FAQ</Link>
          </div>

          <div className="useful_links">
            <h4>other Links</h4>
            <Link href={'#'}>Cookies</Link>
            <Link href={'#'}>Privacy policy</Link>
            <Link href={'#'}>Payment policy</Link>
            <Link href={'#'}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="sign_up_update">
        <h3>Sign up for updates</h3>
        <p>Stay informed about the latest news and releases.</p>

        <div className="input_container">
  <input className="email_input" placeholder="Your Email" />
  <div className="button_container">
    <button className="subscribe_button">Subscribe</button>
  </div>
</div>

        <div className="social_media">
        <a href="https://www.facebook.com/profile.php?id=61571040153157" target="_blank" rel="noopener noreferrer">

          <Image
            src="/assets/svg/facebook.svg"
            alt="facebook-logo"
            width={20}
            height={20}
          />
          </a>
                    <a href="https://www.instagram.com/wearelumyn/profilecard/?igsh=dWhxMDA1bXd2ZXY5" target="_blank" rel="noopener noreferrer">

          <Image
            src="/assets/svg/instagram.svg"
            alt="instagram-logo"
            width={20}
            height={20}
          />
           </a>
          <a href="https://x.com/wearelumyn?s=21" target="_blank" rel="noopener noreferrer">

          <Image
            src="/assets/svg/twitter.svg"
            alt="twitter-logo"
            width={20}
            height={20}
          />
          </a>
<a href="https://www.linkedin.com/company/wearelumyn/" target="_blank" rel="noopener noreferrer">
  <Image
    src="/assets/svg/linkedin.svg"
    alt="linkedin-logo"
    width={20}
    height={20}
  />
</a>

        </div>
      </div>
    </div>
</footer>

)

export default Footer;