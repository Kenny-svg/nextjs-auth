import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary w-full pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto w-11/12">
          <div className="md:px-14">
            <h2 className="font-bold text-xl text-white mt-10">Company</h2>
            <ul className="mt-5">
              <li className="py-1 text-dutify font-bold">
                <Link href="/">About</Link>
              </li>
              <li className="py-1 text-dutify font-bold">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="py-1 text-dutify font-bold">
                <Link href="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="md:px-20">
            <h2 className="font-bold text-xl text-white mt-10">Quick Links</h2>
            <ul className="mt-5">
              <li className="py-1 text-dutify font-bold">
                <Link href="/">Find services</Link>
              </li>
              <li className="py-1 text-dutify font-bold">
                <Link href="/contact">Pricing & plans</Link>
              </li>
              <li className="py-1 text-dutify font-bold">
                <Link href="/faq">List your business</Link>
              </li>
            </ul>
          </div>
          <div className="md:px-20">
            <h2 className="font-bold text-xl text-white mt-10">Resources</h2>
            <ul className="mt-5">
              <li className="py-1 text-dutify font-bold">
                <Link href="/">Blog</Link>
              </li>
              <li className="py-1 text-dutify font-bold">
                <Link href="/contact">Affiliate program</Link>
              </li>
            </ul>
          </div>
          <div className="md:px-14">
            <h2 className="font-bold text-xl text-white mt-10">
              More from Dutiful
            </h2>
            <ul className="mt-5">
              <li className="py-1 text-dutify font-bold">
                <Link href="/">Dutiful jobs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between md:flex-row flex-col w-10/12 mx-auto mt-5 border-t pt-5 border-b border-secondary pb-5">
          <div>
            <div class="flex text-white">
              <p className="-mt-1">Follow us</p>
              <FaFacebookF className="mx-4" />
              <FaInstagram className="mx-4" />
              <FaTwitter className="mx-4" />
              <FaYoutube className="mx-4" />
              <FaLinkedinIn className="mx-4" />
            </div>
          </div>
          <div class="md:mt-0 mt-5">
            <div class="flex text-white">
              <p>Download the app</p>
              <FaApple className="mx-4" />
              <FaGooglePlay className="mx-4" />
            </div>
          </div>
        </div>
        <div class="flex w-10/12 mx-auto mt-10 text-white">
          <div>
            <i class="bi bi-c-circle"></i>2022 Ditiful
          </div>
          <div class="md:mx-20">
            <div class="flex">
              <p class="md:mx-4">Terms of Service</p>
              <p class="mx-4">Privacy Policy</p>
              <p class="mx-4">Disclaimer</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
