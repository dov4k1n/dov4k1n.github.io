// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="main.html">Главная</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="phonetics/phonetics.html"><strong aria-hidden="true">1.</strong> Фонетика</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="phonetics/vowel-harmony.html"><strong aria-hidden="true">1.1.</strong> Гармония ряда</a></li><li class="chapter-item expanded "><a href="phonetics/rounding-harmony.html"><strong aria-hidden="true">1.2.</strong> Гармония губ</a></li><li class="chapter-item expanded "><a href="phonetics/alphabet.html"><strong aria-hidden="true">1.3.</strong> Алфавит</a></li><li class="chapter-item expanded "><a href="phonetics/alphabet-latin.html"><strong aria-hidden="true">1.4.</strong> Алфавит (латиница)</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="lexicon/lexicon.html"><strong aria-hidden="true">2.</strong> Лексика</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="morphology/morphology.html"><strong aria-hidden="true">3.</strong> Морфология</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="morphology/verb/verb.html"><strong aria-hidden="true">3.1.</strong> Глагол</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="morphology/verb/present.html"><strong aria-hidden="true">3.1.1.</strong> Настоящее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/definite-past.html"><strong aria-hidden="true">3.1.2.</strong> Определённое прошедшее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/indefinite-past.html"><strong aria-hidden="true">3.1.3.</strong> Неопределённое прошедшее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/past-continuous.html"><strong aria-hidden="true">3.1.4.</strong> Незаконченное прошедшее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/past-perfect.html"><strong aria-hidden="true">3.1.5.</strong> Давнопрошедшее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/definite-future.html"><strong aria-hidden="true">3.1.6.</strong> Определённое будущее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/indefinite-future.html"><strong aria-hidden="true">3.1.7.</strong> Неопределённое будущее время</a></li><li class="chapter-item expanded "><a href="morphology/verb/infinitive.html"><strong aria-hidden="true">3.1.8.</strong> Инфинитив</a></li><li class="chapter-item expanded "><a href="morphology/verb/verbal-noun.html"><strong aria-hidden="true">3.1.9.</strong> Имя действия</a></li><li class="chapter-item expanded "><a href="morphology/verb/future-in-the-past.html"><strong aria-hidden="true">3.1.10.</strong> Будущее в прошедшем</a></li></ol></li><li class="chapter-item expanded "><a href="morphology/noun/noun.html"><strong aria-hidden="true">3.2.</strong> Существительное</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="morphology/noun/plural.html"><strong aria-hidden="true">3.2.1.</strong> Множественное число</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.2.</strong> Притяжательный падеж</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.3.</strong> Направительный падеж</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.4.</strong> Винительный падеж</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.5.</strong> Исходный падеж</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.2.6.</strong> Местно-временной падеж</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.</strong> Прилагательное</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.1.</strong> Изафеты</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">3.3.2.</strong> Степени сравнения</div></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="syntax/syntax.html"><strong aria-hidden="true">4.</strong> Синтаксис</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="culture/culture.html"><strong aria-hidden="true">5.</strong> Культура</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">5.1.</strong> История татар</div></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
