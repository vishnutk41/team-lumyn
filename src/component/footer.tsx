import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, FormEvent } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get the form element and submit
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
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
              <a className="cta" href="tel:+971 58 586 7086 ">+971 58 586 7086 </a>
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
              <Link href={'/podcast'}>Echopod</Link>
              <Link href={'/blogs'}>Blog</Link>
              <Link href={'/products'}>Products</Link>
              <Link href={'/frequently-asked-questions'}>FAQ</Link>
            </div>

            <div className="useful_links">
              <h4>Other Links</h4>
              <Link href={'/cookies'}>Cookies</Link>
              <Link href={'/privacy_policy'}>Privacy policy</Link>
              <Link href={'/payment_policy'}>Payment policy</Link>
              <Link href={'/terms_conditions'}>Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="sign_up_update">
          <h3>Sign up for updates</h3>
          <p>Stay informed about the latest news and releases.</p>

          <form 
            action="https://teamlumyn.us11.list-manage.com/subscribe/post?u=3a21d78401d8f3f73441cfe03&amp;id=53fd171075&amp;f_id=007ff3e1f0" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
            target="_blank"
            onSubmit={handleSubmit}
          >
            <div className="input_container">
              <input 
                type="email" 
                name="EMAIL" 
                className="email_input" 
                id="mce-EMAIL"
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="button_container">
                <button type="submit" className="subscribe_button">
                  Subscribe
                </button>
              </div>
            </div>
            {/* Hidden field for bot protection */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input 
                type="text" 
                name="b_3a21d78401d8f3f73441cfe03_53fd171075" 
                tabIndex={-1}
                defaultValue=""
              />
            </div>
          </form>

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
      <div className="copyright">
        <p>@2025 All Rights Reserved <a href="https://alishantrading.com/" target="_blank" rel="noopener noreferrer">Alishan Trading LLC</a></p>
      </div>
    </footer>
  );
};

export default Footer;