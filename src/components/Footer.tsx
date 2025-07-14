'use client';

import { useLocale } from './LocaleProvider';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">{t.header.title}</h3>
            <p className="text-gray-300">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: t.header.nav.home, href: '#home' },
                { name: t.header.nav.about, href: '#about' },
                { name: t.header.nav.projects, href: '#projects' },
                { name: t.header.nav.skills, href: '#skills' },
                { name: t.header.nav.contact, href: '#contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">{t.footer.builtWith}</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm">
              <span className="px-3 py-1 bg-blue-600 rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-blue-500 rounded-full">TypeScript</span>
              <span className="px-3 py-1 bg-cyan-500 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 bg-purple-500 rounded-full">Framer Motion</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm flex items-center gap-2">
              © {currentYear} {t.footer.copyright}
            </p>
            
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                {t.footer.likeMyWork}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
