
        // Словарь переводов
        const langData = {
            uz: {
                title: "Sahifalovchi",
                footerName: "GitHub sahifasiga o'tish",
                labelPages: "Barcha sahifalar soni:",
                increasePageCount: "Sahifalar sonini oshirish",
                decreasePageCount: "Sahifalar sonini kamaytirish",
                pageCountPlaceholder: "Sahifalar sonini kiriting",
                btnCalc: "Hisoblash",
                alertPageMultiple: "Kitob sahifalari soni 4 ga karrali bo‘lishi kerak. Qiymat hisoblash uchun {pages} gacha oshirib yaxlitlanadi.",
                infoSheets: "Kerak boʻladigan A4 varaqlar soni:",
                infoPages: "Betlar soni:",
                labelSide1: "1-Tomon (old tomoni):",
                labelSide2: "2-Tomon (orqa tomoni):",
                layoutToggle: "Har bir juftlikni yangi qatorda ko‘rsatish",
                alternateFeedToggle: "Printer uchun teskari tartib",
                resultPlaceholder: "Hisoblash tugmasini bosing — sahifalar roʻyxati shu yerda koʻrinadi.",
                copyButton: "Nusxalash",
                copyDone: "Nusxalandi ✓",
                copyEmpty: "Avval sahifalarni hisoblang.",
                copyError: "Nusxalab boʻlmadi. Brauzerga almashish buferidan foydalanishga ruxsat bering va qayta urinib koʻring.",
                previewTitle: "Betlarning varaqlardagi tartibi:",
                invertLabel: "Varaqlar tartibini teskari o‘zgartirish",
                feedNormal: "Oddiy tartib: avval tashqi varaq, so‘ng ichki varaqlar.",
                feedInverted: "Teskari tartib: avval ichki varaqlar, so‘ng tashqi varaq.",
                previewEmpty: "Betlarni ko‘rish uchun sahifalar sonini kiriting va «Hisoblash»ni bosing.",
                previewSheet: "Varaq",
                previewFeed: "Tartib",
                previewFront: "Old tomoni",
                previewBack: "Orqa tomoni",
                previewLimit: "Tez ishlashi uchun {shown} ta varaq ko‘rsatilmoqda (jami {total} ta). Chop etish ro‘yxatida barcha varaqlar bor.",
                languageLabel: "Til",
                themeLabel: "Mavzu",
                themeSystem: "Tizim bo‘yicha",
                themeLight: "Yorug‘",
                themeDark: "Qorong‘i",
                downloadLabel: "Yuklab olish",
                androidDownloadUnavailable: "Android APK fayli hali mavjud emas",
                helpButton: "Yordam",
                helpTitle: "Sahifalovchidan foydalanish",
                helpIntro: "Sahifalovchi kitobni A4 varaqlarda buklet shaklida chop etish uchun sahifalar tartibini hisoblaydi. Sahifalar sonini kiriting, ro‘yxat va varaqlar ko‘rinishini tekshiring, so‘ng to‘liq chop etishdan oldin bitta sinov varag‘ini chiqaring.",
                helpSections: [
                    {
                        title: "Sahifalar soni va hisoblash",
                        items: [
                            "«Barcha sahifalar soni» maydoniga kitobdagi jami sahifalarni kiriting. Yonidagi strelkalar sonni bittaga oshiradi yoki kamaytiradi.",
                            "«Hisoblash» tugmasini bosing. Buklet uchun har bir A4 varaqqa 4 ta sahifa joylanadi; kiritilgan son 4 ga karrali bo‘lmasa, hisoblashda keyingi 4 ga karrali songacha yaxlitlanadi.",
                            "Natija blokida hisoblangan sahifalar va kerakli A4 varaqlar soni ko‘rsatiladi. Varaqlar soni hisoblangan sahifalar sonining to‘rtdan biriga teng."
                        ]
                    },
                    {
                        title: "Sahifalar ro‘yxatlari va nusxa olish",
                        items: [
                            "«1-Tomon» — varaqlarning old tomoni, «2-Tomon» — orqa tomoni. Har bir ikki sonli juftlik bitta varaq tomonida chap va o‘ngda joylashadigan sahifalarni bildiradi.",
                            "«Har bir juftlikni yangi qatorda ko‘rsatish» belgisi har bir ro‘yxat uchun alohida ishlaydi: belgi o‘chiq bo‘lsa juftliklar bir qatorda, yoqilsa har biri yangi qatorda ko‘rsatiladi.",
                            "«Printer uchun teskari tartib» belgisi ikkinchi tomon ro‘yxatidagi juftliklar ketma-ketligini teskari qiladi. Juftlik ichidagi sahifalar joyi o‘zgarmaydi. O‘zgarish varaqlar ko‘rinishida ham aks etadi va belgi holati brauzerda saqlanadi.",
                            "«Nusxalash» tugmasi tegishli tomon ro‘yxatini ko‘chiradi. Matnning bir qismini belgilasangiz, faqat belgilangan qism nusxalanadi; natija maydoniga bosish ham nusxalashni boshlaydi.",
                            "Natija maydonlaridagi matnni tahrirlab bo‘lmaydi. Sahifalar soni yoki tartib sozlamalari o‘zgartirilganda ro‘yxatlar va ko‘rinish qayta hisoblanadi."
                        ]
                    },
                    {
                        title: "Varaqlar tartibi va ko‘rgazmali ko‘rinish",
                        items: [
                            "Ko‘rgazmali bo‘lim har bir varaqning old va orqa tomonidagi juftliklarni ko‘rsatadi. Printer uchun teskari tartib yoqilsa, orqa tomonlar ikkinchi ro‘yxatdagi tartibda ko‘rinadi.",
                            "«Varaqlar tartibini teskari o‘zgartirish» ro‘yxatlardagi varaqlar ketma-ketligini va ko‘rgazmali tartibni o‘zgartiradi. Uni chop etish yoki taxlash usulingizga moslang.",
                            "Tez ishlashi uchun ko‘rgazmali ko‘rinishda ko‘pi bilan 200 ta varaq ko‘rsatiladi. Chop etish ro‘yxatlarida barcha varaqlar saqlanadi."
                        ]
                    },
                    {
                        title: "Saqlash, til va rang mavzusi",
                        items: [
                            "«TXT formatida saqlash» tugmasi old va orqa tomon ro‘yxatlarini matn fayliga saqlaydi.",
                            "Til, rang mavzusi va printer uchun teskari tartib belgisi shu brauzerda eslab qolinadi.",
                            "Yordam oynasini yuqoridagi xoch, «Yopish» tugmasi, Escape tugmasi yoki oyna tashqarisini bosib yoping."
                        ]
                    }
                ],
                helpClose: "Yopish",
                instructionsTitle: "Varaqlarni qanday toʻgʻri joylashtirish kerak?",
                instructions: [
                    "Betlar sonini kiriting va «Hisoblash» tugmasini bosing. Bitta A4 varaqda kitobning 4 ta beti joylashadi.",
                    "Raqamlarni juftlab o‘qing: har bir juftlik A4 varaqning bir tomonida chap va o‘ngda joylashadigan betlarni ko‘rsatadi. Masalan, «368, 1» degani — chapda 368-bet, o‘ngda 1-bet.",
                    "Birinchi ro‘yxat varaqning old tomoni, ikkinchisi esa orqa tomoni uchun. Ro‘yxatdagi bir xil o‘rinda turgan juftliklar bitta varaqga tegishli. Birinchi juftlik tashqi varaqqa, keyingilari uning ichiga joylanadigan varaqlarga tegishli.",
                    "Betlarni A4 qog‘ozga albom yo‘nalishida joylashtiring: juftlikdagi birinchi raqam chapda, ikkinchisi o‘ngda bo‘lsin. Qog‘ozning ikkala tomoniga chop eting. Printer qog‘ozni qaysi tomonga aylantirishini tekshirish uchun avval bitta sinov varag‘ini chop qiling.",
                    "Har bir A4 varaqni teng ikkiga buklang. Buklangan varaqlarni birinchi varaq tashqarida qoladigan qilib, ro‘yxat tartibida bir-birining ichiga joylang.",
                    "Betlar tartibini tekshiring: muqovaning ichki tomonida 2-bet, orqa muqovaning ichki tomonida esa oxirgi bet bo‘lishi kerak. So‘ng buklangan joyidan tikib yoki boshqa usulda mahkamlang.",
                    "Word orqali buklet chop etish: «Maket» → «Maydonlar» → «Maxsus maydonlar»ni tanlang. «Bir nechta sahifa» ro‘yxatidan «Buklet»ni belgilang, qog‘oz o‘lchamini A4 qilib, «OK»ni bosing. Chop etishda ikki tomonlama rejimni yoqing va avval bir sinov nusxasini chop etib, qog‘ozni aylantirish yo‘nalishini tekshiring. Word buklet tartibini o‘zi joylaydi; bu usulda yuqoridagi sahifalar ro‘yxatidan foydalanmang."
                ],
                instructionsNote: "Eslatma: ikki tomonlama chop etishda qog‘ozni aylantirish yo‘nalishi printer va dasturga bog‘liq. Sinov varag‘ida betlarning joylashuvini tekshiring. Qalin kitobni bir nechta kichik blok qilib tayyorlash talab etilishi mumkin.",
                btnSave: "TXT formatida saqlash",
                alertMin: "Eng kamida 4 ta sahifa boʻlishi kerak!",
                fileHeader1: "=== 1-TARAF (Oldingi tomoni) ===",
                fileHeader2: "=== 2-TARAF (Orqa tomoni) ==="
            },
            ru: {
                title: "Брошюратор",
                footerName: "Посмотрите на GitHub",
                labelPages: "Всего страниц:",
                increasePageCount: "Увеличить количество страниц",
                decreasePageCount: "Уменьшить количество страниц",
                pageCountPlaceholder: "Введите количество страниц",
                btnCalc: "Рассчитать",
                alertPageMultiple: "Количество страниц должно быть кратно 4. Значение будет округлено вверх до {pages}.",
                infoSheets: "Всего листов формата А4:",
                infoPages: "Количество страниц:",
                labelSide1: "Сторона 1 (лицевая):",
                labelSide2: "Сторона 2 (оборотная):",
                layoutToggle: "Каждую пару с новой строки",
                alternateFeedToggle: "Обратный порядок для принтера",
                resultPlaceholder: "Нажмите «Рассчитать», чтобы увидеть список страниц.",
                copyButton: "Копировать",
                copyDone: "Скопировано ✓",
                copyEmpty: "Сначала рассчитайте страницы.",
                copyError: "Не удалось скопировать. Разрешите браузеру доступ к буферу обмена и попробуйте ещё раз.",
                previewTitle: "Визуальный порядок страниц:",
                invertLabel: "Обратить порядок листов",
                feedNormal: "Обычный порядок: сначала внешний лист, затем внутренние.",
                feedInverted: "Обратный порядок: сначала внутренние листы, затем внешний.",
                previewEmpty: "Введите число страниц и нажмите «Рассчитать», чтобы увидеть листы.",
                previewSheet: "Лист",
                previewFeed: "Порядок",
                previewFront: "Лицевая сторона",
                previewBack: "Оборотная сторона",
                previewLimit: "Чтобы страница работала быстрее, показаны первые {shown} листов из {total}. В списках для печати есть все листы.",
                languageLabel: "Язык",
                themeLabel: "Тема",
                themeSystem: "Как в системе",
                themeLight: "Светлая",
                themeDark: "Тёмная",
                downloadLabel: "Скачать",
                androidDownloadUnavailable: "Файл Android APK пока недоступен",
                helpButton: "Помощь",
                helpTitle: "Как пользоваться брошюратором",
                helpIntro: "«Брошюратор» рассчитывает порядок страниц для печати книги в виде буклета на листах A4. Введите количество страниц, проверьте списки и визуальный порядок листов, затем перед полной печатью сделайте пробную печать одного листа.",
                helpSections: [
                    {
                        title: "Количество страниц и расчёт",
                        items: [
                            "Введите общее количество страниц книги в поле «Всего страниц». Стрелки рядом с полем изменяют значение на одну страницу.",
                            "Нажмите «Рассчитать». Для буклета на каждом листе A4 размещаются 4 страницы; если введённое число не кратно 4, при расчёте оно округляется вверх до ближайшего числа, кратного 4.",
                            "В блоке результатов отображаются рассчитанное количество страниц и число листов A4. Число листов равно количеству рассчитанных страниц, делённому на четыре."
                        ]
                    },
                    {
                        title: "Списки страниц и копирование",
                        items: [
                            "«Сторона 1» — лицевая сторона листов, «Сторона 2» — оборотная. Каждая пара из двух чисел обозначает страницы слева и справа на одной стороне листа.",
                            "Флажок «Каждую пару с новой строки» работает отдельно для каждого списка. Когда он выключен, пары идут в одной строке; когда включён — каждая пара начинается с новой строки.",
                            "Флажок «Обратный порядок для принтера» меняет порядок пар только во втором списке, не переставляя страницы внутри пары. Это изменение видно и в визуальном порядке листов; состояние флажка сохраняется в браузере.",
                            "Кнопка «Копировать» копирует список соответствующей стороны. Если выделить часть текста, копируется только выделенный фрагмент. Щелчок по полю также запускает копирование.",
                            "Поля результатов доступны только для чтения. Списки и визуальный порядок обновляются при изменении числа страниц или настроек."
                        ]
                    },
                    {
                        title: "Порядок листов и визуальный просмотр",
                        items: [
                            "Визуальный просмотр показывает пары страниц на лицевой и оборотной сторонах каждого листа. Если включён обратный порядок для принтера, оборотная сторона отображается в том же порядке, что и второй список.",
                            "Флажок «Обратить порядок листов» меняет последовательность листов в обоих списках и в визуальном просмотре. Выберите порядок, подходящий для печати и укладки листов.",
                            "Для быстродействия визуальный просмотр ограничен 200 листами. Списки для печати при этом содержат все листы."
                        ]
                    },
                    {
                        title: "Сохранение, язык и тема",
                        items: [
                            "Кнопка «Сохранить в TXT» скачивает текстовый файл со списками обеих сторон.",
                            "Язык интерфейса, цветовая тема и состояние флажка обратного порядка для принтера сохраняются в этом браузере.",
                            "Закройте справку крестиком, кнопкой «Закрыть», клавишей Escape или щелчком за пределами окна."
                        ]
                    }
                ],
                helpClose: "Закрыть",
                instructionsTitle: "Как правильно сложить листы?",
                instructions: [
                    "Введите количество страниц и нажмите «Рассчитать». На одном листе A4 размещаются четыре страницы книги.",
                    "Читайте числа парами: каждая пара показывает страницы, которые будут расположены слева и справа на одной стороне листа A4. Например, «368, 1» означает: слева — страница 368, справа — страница 1.",
                    "Первый список предназначен для лицевой стороны листов, второй — для оборотной. Пары на одинаковых позициях относятся к одному листу. Первая пара — внешний лист, следующие — листы, вкладываемые внутрь.",
                    "Разместите страницы на листе A4 в альбомной ориентации: первое число пары слева, второе справа. Печатайте с обеих сторон. Сначала сделайте пробную печать одного листа, чтобы проверить, как принтер переворачивает бумагу.",
                    "Сложите каждый лист пополам. Вкладывайте сложенные листы друг в друга по порядку: первый лист должен быть снаружи.",
                    "Проверьте последовательность страниц: на внутренней стороне передней обложки должна быть страница 2, а на внутренней стороне задней обложки — последняя страница. Затем скрепите блок по сгибу.",
                    "Печать буклетом из Word: откройте «Макет» → «Поля» → «Настраиваемые поля». В списке «Несколько страниц» выберите «Брошюра», укажите формат бумаги A4 и нажмите «ОК». В настройках печати включите двустороннюю печать и сначала распечатайте пробный экземпляр, чтобы проверить направление переворота бумаги. Word сам расположит страницы для буклета; при этом способе не используйте приведённые выше списки страниц."
                ],
                instructionsNote: "Важно: направление переворота листа при двусторонней печати зависит от принтера и программы. Проверьте ориентацию страниц на пробном листе. Для толстой книги может понадобиться разделить листы на несколько небольших блоков.",
                btnSave: "Сохранить в TXT",
                alertMin: "Минимальное количество страниц — 4",
                fileHeader1: "=== 1-СТОРОНА (Лицевая сторона) ===",
                fileHeader2: "=== 2-СТОРОНА (Оборотная сторона) ==="
            },
            en: {
                title: "Booklet Maker",
                footerName: "See on GitHub",
                labelPages: "Total pages:",
                increasePageCount: "Increase page count",
                decreasePageCount: "Decrease page count",
                pageCountPlaceholder: "Enter the number of pages",
                btnCalc: "Calculate",
                alertPageMultiple: "The page count must be a multiple of 4. It will be rounded up to {pages} for the calculation.",
                infoSheets: "Total A4 sheets:",
                infoPages: "Page count:",
                labelSide1: "Side 1 (Front):",
                labelSide2: "Side 2 (Back):",
                layoutToggle: "Show each pair on a new line",
                alternateFeedToggle: "Reverse feed order for printer",
                resultPlaceholder: "Press “Calculate” to see the page order.",
                copyButton: "Copy",
                copyDone: "Copied ✓",
                copyEmpty: "Calculate the page order first.",
                copyError: "Could not copy. Allow clipboard access in your browser and try again.",
                previewTitle: "Visual page order:",
                invertLabel: "Reverse sheet order",
                feedNormal: "Normal order: outer sheet first, followed by the inner sheets.",
                feedInverted: "Reversed order: inner sheets first, followed by the outer sheet.",
                previewEmpty: "Enter the page count and press “Calculate” to preview the sheets.",
                previewSheet: "Sheet",
                previewFeed: "Order",
                previewFront: "Front side",
                previewBack: "Back side",
                previewLimit: "To keep the page responsive, showing the first {shown} of {total} sheets. The print lists still include every sheet.",
                languageLabel: "Language",
                themeLabel: "Theme",
                themeSystem: "System",
                themeLight: "Light",
                themeDark: "Dark",
                downloadLabel: "Download",
                androidDownloadUnavailable: "Android APK is not available yet",
                helpButton: "Help",
                helpTitle: "How to use Booklet Maker",
                helpIntro: "Booklet Maker calculates page order for printing a book as a booklet on A4 sheets. Enter the page count, review the lists and sheet preview, then print one test sheet before printing the full job.",
                helpSections: [
                    {
                        title: "Page count and calculation",
                        items: [
                            "Enter the total number of book pages in “Total pages”. The arrows next to the field increase or decrease the value by one.",
                            "Press “Calculate”. A booklet places 4 book pages on each A4 sheet. If the entered count is not divisible by 4, it is rounded up to the next multiple of 4 for the calculation.",
                            "The results panel shows the calculated page count and the number of A4 sheets required. The sheet count is the calculated page count divided by four."
                        ]
                    },
                    {
                        title: "Page lists and copying",
                        items: [
                            "“Side 1” is for the front of the sheets; “Side 2” is for the back. Each pair of numbers represents the left and right pages on one side of a sheet.",
                            "The “Show each pair on a new line” checkbox works independently for each list. When off, pairs appear on one line; when on, each pair starts on a new line.",
                            "The “Reverse feed order for printer” checkbox reverses the pairs in the second list only; page order within each pair stays the same. The sheet preview reflects this change, and the checkbox state is saved in your browser.",
                            "The “Copy” button copies the corresponding side’s list. Select part of the text to copy only that selection. Clicking inside a result field also starts copying.",
                            "Result fields are read-only. The lists and sheet preview update when the page count or ordering options change."
                        ]
                    },
                    {
                        title: "Sheet order and visual preview",
                        items: [
                            "The visual preview shows the page pairs on the front and back of each sheet. When reverse printer order is enabled, the back sides follow the same order as the second list.",
                            "The “Reverse sheet order” checkbox changes the sheet sequence in both lists and in the preview. Choose the order that suits your printing or stacking workflow.",
                            "For responsiveness, the visual preview is limited to 200 sheets. The print lists still include every sheet."
                        ]
                    },
                    {
                        title: "Saving, language, and theme",
                        items: [
                            "The “Save as TXT” button downloads a text file containing both side lists.",
                            "The interface language, color theme, and reverse printer-order checkbox state are saved in this browser.",
                            "Close this guide with the X, the “Close” button, Escape, or by clicking outside the dialog."
                        ]
                    }
                ],
                helpClose: "Close",
                instructionsTitle: "How should the sheets be folded and assembled?",
                instructions: [
                    "Enter the page count and press “Calculate”. Each A4 sheet contains four book pages.",
                    "Read the numbers in pairs: each pair shows the left and right pages on one side of an A4 sheet. For example, “368, 1” means page 368 on the left and page 1 on the right.",
                    "The first list is for the front of each sheet; the second is for the back. Pairs in the same position belong to the same physical sheet. The first pair is the outer sheet; subsequent sheets fit inside it.",
                    "Arrange the pages on A4 paper in landscape orientation, with the first number on the left and the second on the right. Print both sides. Test one sheet first to check the printer's paper-flip direction.",
                    "Fold each A4 sheet in half. Insert the folded sheets inside one another in list order, keeping the first sheet on the outside.",
                    "Check the page sequence: page 2 should be on the inside of the front cover, and the final page on the inside of the back cover. Then bind the booklet along the fold.",
                    "Print a booklet from Word: go to Layout → Margins → Custom Margins. Under “Multiple pages,” choose “Book fold,” set the paper size to A4, and select OK. Enable duplex printing and print a test copy first to check the paper-flip direction. Word arranges booklet pages automatically, so do not use the page lists above with this method."
                ],
                instructionsNote: "Note: the paper-flip direction for duplex printing varies by printer and software. Check the page orientation with a test sheet. For a thick book, you may need to split the sheets into several smaller sections.",
                btnSave: "Save as TXT",
                alertMin: "Enter at least 4 pages.",
                fileHeader1: "=== SIDE 1 (Front) ===",
                fileHeader2: "=== SIDE 2 (Back) ==="
            }
        };

        let currentLang = 'uz';
        let bookPageCount = 0;
        let sheetCount = 0;
        const copyResetTimers = {};
        let isCalculating = false;
        let calculateAnimationTimer;

        function getSavedPreference(key, validValues, fallback) {
            try {
                const savedValue = localStorage.getItem(key);
                return validValues.includes(savedValue) ? savedValue : fallback;
            } catch (error) {
                console.error(`Failed to load preference "${key}":`, error);
                return fallback;
            }
        }

        function savePreference(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (error) {
                console.error(`Failed to save preference "${key}":`, error);
            }
        }

        function setLanguage(lang) {
            currentLang = lang;
            savePreference('sahifalovchi-language', lang);
            const t = langData[lang];
            document.documentElement.lang = lang;
            document.title = t.title;
            document.getElementById('languageSelectedLabel').textContent = { uz: "O'Z", ru: 'RU', en: 'EN' }[lang];
            document.querySelectorAll('#languageMenu [data-language]').forEach(option => {
                option.setAttribute('aria-checked', String(option.dataset.language === lang));
            });

            document.getElementById('t-title').textContent = t.title;
            document.getElementById('t-footer-name').textContent = t.footerName;
            document.getElementById('t-label-pages').textContent = t.labelPages;
            document.getElementById('increasePageCount').setAttribute('aria-label', t.increasePageCount);
            document.getElementById('decreasePageCount').setAttribute('aria-label', t.decreasePageCount);
            document.getElementById('pageCount').placeholder = t.pageCountPlaceholder;
            document.getElementById('t-btn-calc-label').textContent = t.btnCalc;
            document.getElementById('t-info-sheets').textContent = t.infoSheets;
            document.getElementById('t-info-pages').textContent = t.infoPages;
            document.getElementById('t-label-side1').textContent = t.labelSide1;
            document.getElementById('t-label-side2').textContent = t.labelSide2;
            document.getElementById('t-layout-side1').textContent = t.layoutToggle;
            document.getElementById('t-layout-side2').textContent = t.layoutToggle;
            document.getElementById('side1').placeholder = t.resultPlaceholder;
            document.getElementById('side2').placeholder = t.resultPlaceholder;
            document.getElementById('t-alternate-feed-side2').textContent = t.alternateFeedToggle;
            document.getElementById('t-copy-side1').textContent = t.copyButton;
            document.getElementById('t-copy-side2').textContent = t.copyButton;
            document.getElementById('t-btn-save').textContent = t.btnSave;
            document.getElementById('t-preview-title').textContent = t.previewTitle;
            document.getElementById('t-invert-label').textContent = t.invertLabel;
            document.getElementById('t-preview-empty').textContent = t.previewEmpty;
            document.getElementById('t-theme-system').textContent = t.themeSystem;
            document.getElementById('t-theme-light').textContent = t.themeLight;
            document.getElementById('t-theme-dark').textContent = t.themeDark;
            document.getElementById('themeSelectedLabel').textContent = {
                system: t.themeSystem,
                light: t.themeLight,
                dark: t.themeDark
            }[document.getElementById('themeSelect').dataset.value || 'system'];
            document.getElementById('languageSelect').setAttribute('aria-label', t.languageLabel);
            document.getElementById('languageMenu').querySelector('[role="menu"]').setAttribute('aria-label', t.languageLabel);
            document.getElementById('themeSelect').setAttribute('aria-label', t.themeLabel);
            document.getElementById('themeMenu').querySelector('[role="menu"]').setAttribute('aria-label', t.themeLabel);
            document.getElementById('t-download-label').setAttribute('aria-label', t.downloadLabel);
            document.getElementById('t-download-label').title = t.downloadLabel;
            document.getElementById('t-download-android').title = t.androidDownloadUnavailable;
            document.getElementById('t-instructions-title').textContent = t.instructionsTitle;
            const instructions = document.getElementById('t-instructions');
            instructions.replaceChildren(...t.instructions.map(step => {
                const item = document.createElement('li');
                item.textContent = step;
                return item;
            }));
            document.getElementById('t-instructions-note').textContent = t.instructionsNote;
            document.getElementById('t-help-button').textContent = t.helpButton;
            document.getElementById('t-help-title').textContent = t.helpTitle;
            document.getElementById('t-help-intro').textContent = t.helpIntro;
            document.getElementById('t-help-close').setAttribute('aria-label', t.helpClose);
            document.getElementById('t-help-done').textContent = t.helpClose;
            renderHelpSections(t.helpSections);
            renderSheetPreview();
        }

        function renderHelpSections(sections) {
            const container = document.getElementById('t-help-sections');
            container.replaceChildren(...sections.map(section => {
                const article = document.createElement('section');
                article.className = 'rounded-xl border border-slate-200 bg-slate-50 p-4';

                const heading = document.createElement('h3');
                heading.className = 'mb-2 font-bold text-slate-800';
                heading.textContent = section.title;

                const list = document.createElement('ul');
                list.className = 'list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600';
                list.replaceChildren(...section.items.map(text => {
                    const item = document.createElement('li');
                    item.textContent = text;
                    return item;
                }));

                article.append(heading, list);
                return article;
            }));
        }

        function applyTheme() {
            const themeSelect = document.getElementById('themeSelect');
            const theme = themeSelect.dataset.value;
            savePreference('sahifalovchi-theme', theme);
            const t = langData[currentLang];
            document.getElementById('themeSelectedLabel').textContent = {
                system: t.themeSystem,
                light: t.themeLight,
                dark: t.themeDark
            }[theme];
            document.querySelectorAll('#themeMenu [data-theme]').forEach(option => {
                option.setAttribute('aria-checked', String(option.dataset.theme === theme));
            });
            const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
            document.body.dataset.theme = isDark ? 'dark' : 'light';
            document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        }

        function adjustPageCount(step) {
            const pageCount = document.getElementById('pageCount');
            if (step > 0) pageCount.stepUp();
            else pageCount.stepDown();
            pageCount.dispatchEvent(new Event('input', { bubbles: true }));
            pageCount.dispatchEvent(new Event('change', { bubbles: true }));
        }

        function renderSheetPreview() {
            const t = langData[currentLang];
            const isInverted = document.getElementById('invertFeed').checked;
            const reverseSide2 = document.getElementById('alternateFeedSide2').checked;
            const preview = document.getElementById('sheetPreview');
            const emptyMessage = document.getElementById('t-preview-empty');
            const limitMessage = document.getElementById('t-preview-limit');
            const description = document.getElementById('t-feed-description');
            const displayLimit = 200;
            const displayCount = Math.min(sheetCount, displayLimit);
            const cards = document.createDocumentFragment();

            description.textContent = isInverted ? t.feedInverted : t.feedNormal;
            emptyMessage.classList.toggle('hidden', sheetCount > 0);

            for (let index = 0; index < displayCount; index++) {
                const sheetIndex = isInverted ? sheetCount - index - 1 : index;
                const sheet = getSheetPages(sheetIndex);
                const backSheetIndex = isInverted === reverseSide2 ? sheetCount - index - 1 : index;
                const backPages = getSheetPages(backSheetIndex).back;
                const card = document.createElement('article');
                card.className = 'sheet-card text-xs text-slate-700';

                const heading = document.createElement('h3');
                heading.className = 'mb-2 font-semibold';
                const physicalSheet = sheetIndex + 1;
                heading.textContent = `${t.previewFeed} ${index + 1} · ${t.previewSheet} ${physicalSheet}`;

                const frontLabel = document.createElement('p');
                frontLabel.className = 'mb-1 text-slate-500';
                frontLabel.textContent = t.previewFront;
                const front = document.createElement('div');
                front.className = 'sheet-side mb-2';
                sheet.front.forEach(page => {
                    const pageCell = document.createElement('span');
                    pageCell.className = 'sheet-page';
                    pageCell.textContent = page;
                    front.append(pageCell);
                });

                const backLabel = document.createElement('p');
                backLabel.className = 'mb-1 text-slate-500';
                backLabel.textContent = t.previewBack;
                const back = document.createElement('div');
                back.className = 'sheet-side';
                backPages.forEach(page => {
                    const pageCell = document.createElement('span');
                    pageCell.className = 'sheet-page';
                    pageCell.textContent = page;
                    back.append(pageCell);
                });

                card.append(heading, frontLabel, front, backLabel, back);
                cards.append(card);
            }
            preview.replaceChildren(cards);

            const omitted = sheetCount - displayLimit;
            limitMessage.classList.toggle('hidden', omitted <= 0);
            if (omitted > 0) {
                limitMessage.textContent = t.previewLimit
                    .replace('{shown}', displayLimit)
                    .replace('{total}', sheetCount);
            } else {
                limitMessage.textContent = '';
            }
        }

        function updateFeedOrder() {
            document.getElementById('side1').value = formatPageList('front', 'side1');
            document.getElementById('side2').value = formatPageList('back', 'side2');
            renderSheetPreview();
        }

        function getSheetPages(index) {
            return {
                front: [bookPageCount - 2 * index, 1 + 2 * index],
                back: [2 + 2 * index, bookPageCount - 2 * index - 1]
            };
        }

        function formatPageList(side, fieldId) {
            const separator = document.getElementById(`inline-${fieldId}`).checked ? ',\n' : ', ';
            const reverseSide2 = side === 'back' && document.getElementById('alternateFeedSide2').checked;
            const invertFeed = document.getElementById('invertFeed').checked;
            const isInverted = side === 'back' ? invertFeed === reverseSide2 : invertFeed;
            const pagePairs = new Array(sheetCount);
            for (let index = 0; index < sheetCount; index++) {
                const sheetIndex = isInverted ? sheetCount - index - 1 : index;
                const firstPage = side === 'front'
                    ? bookPageCount - 2 * sheetIndex
                    : 2 + 2 * sheetIndex;
                const secondPage = side === 'front'
                    ? 1 + 2 * sheetIndex
                    : bookPageCount - 2 * sheetIndex - 1;
                pagePairs[index] = `${firstPage}, ${secondPage}`;
            }
            return pagePairs.join(separator);
        }

        function updatePageListLayout(fieldId) {
            const side = fieldId === 'side1' ? 'front' : 'back';
            document.getElementById(fieldId).value = formatPageList(side, fieldId);
        }

        function animateCalculateButton() {
            const button = document.getElementById('t-btn-calc');
            button.classList.remove('calculating');
            void button.offsetWidth;
            button.classList.add('calculating');
            window.clearTimeout(calculateAnimationTimer);
            calculateAnimationTimer = window.setTimeout(() => {
                button.classList.remove('calculating');
            }, 900);
        }

        async function copyPages(fieldId) {
            const t = langData[currentLang];
            const field = document.getElementById(fieldId);
            const selectionStart = field.selectionStart;
            const selectionEnd = field.selectionEnd;
            const text = selectionStart !== selectionEnd
                ? field.value.slice(selectionStart, selectionEnd)
                : field.value;
            const button = document.getElementById(`t-copy-${fieldId}`);

            if (!text) {
                alert(t.copyEmpty);
                return;
            }

            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                } else {
                    throw new Error('Clipboard API is unavailable in this context.');
                }
            } catch {
                const temporaryField = document.createElement('textarea');
                let copied = false;
                try {
                    temporaryField.value = text;
                    temporaryField.setAttribute('readonly', '');
                    temporaryField.style.position = 'fixed';
                    temporaryField.style.opacity = '0';
                    document.body.appendChild(temporaryField);
                    temporaryField.select();
                    copied = document.execCommand('copy');
                } catch {
                    copied = false;
                } finally {
                    temporaryField.remove();
                }

                if (!copied) {
                    alert(t.copyError);
                    return;
                }
            }

            button.textContent = t.copyDone;
            window.clearTimeout(copyResetTimers[fieldId]);
            copyResetTimers[fieldId] = window.setTimeout(() => {
                button.textContent = langData[currentLang].copyButton;
                delete copyResetTimers[fieldId];
            }, 2000);
        }

        function calculateBooklet() {
            if (isCalculating) return;

            let totalPages = parseInt(document.getElementById('pageCount').value) || 0;
            const t = langData[currentLang];

            if (totalPages < 4) {
                alert(t.alertMin);
                return;
            }

            if (totalPages % 4 !== 0) {
                totalPages = Math.ceil(totalPages / 4) * 4;
                alert(t.alertPageMultiple.replace("{pages}", totalPages));
                document.getElementById('pageCount').value = totalPages;
            }

            animateCalculateButton();
            isCalculating = true;

            try {
                let totalSheets = totalPages / 4;
                document.getElementById('totalSheets').textContent = totalSheets;
                document.getElementById('pagesResult').textContent = totalPages;

                bookPageCount = totalPages;
                sheetCount = totalSheets;

                updateFeedOrder();
            } finally {
                isCalculating = false;
            }
        }

        function saveResult() {
            const t = langData[currentLang];
            let text = `${t.fileHeader1}\n` + document.getElementById('side1').value + "\n\n" +
                       `${t.fileHeader2}\n` + document.getElementById('side2').value;
            let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
            let link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = currentLang === 'ru' ? "broshurator_result.txt" : currentLang === 'en' ? "booklet_result.txt" : "sahifalovchi_result.txt";
            link.click();
        }

        const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)');
        const languageMenu = document.getElementById('languageMenu');
        const themeMenu = document.getElementById('themeMenu');
        const headerMenus = [languageMenu, themeMenu];
        headerMenus.forEach(menu => {
            const summary = menu.querySelector('summary');
            menu.addEventListener('toggle', () => {
                summary.setAttribute('aria-expanded', String(menu.open));
            });
        });
        languageMenu.querySelectorAll('[data-language]').forEach(option => {
            option.addEventListener('click', () => {
                setLanguage(option.dataset.language);
                languageMenu.open = false;
            });
        });
        themeMenu.querySelectorAll('[data-theme]').forEach(option => {
            option.addEventListener('click', () => {
                document.getElementById('themeSelect').dataset.value = option.dataset.theme;
                applyTheme();
                themeMenu.open = false;
            });
        });
        const downloadMenu = document.getElementById('downloadMenu');
        document.addEventListener('click', event => {
            if (!downloadMenu.contains(event.target)) downloadMenu.open = false;
            headerMenus.forEach(menu => {
                if (!menu.contains(event.target)) menu.open = false;
            });
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
                downloadMenu.open = false;
                headerMenus.forEach(menu => {
                    menu.open = false;
                });
            }
        });
        downloadMenu.querySelector('a').addEventListener('click', () => {
            downloadMenu.open = false;
        });
        document.getElementById('invertFeed').addEventListener('change', updateFeedOrder);
        document.getElementById('inline-side1').addEventListener('change', () => updatePageListLayout('side1'));
        document.getElementById('inline-side2').addEventListener('change', () => updatePageListLayout('side2'));
        const alternateFeedSide2 = document.getElementById('alternateFeedSide2');
        alternateFeedSide2.addEventListener('change', () => {
            savePreference('sahifalovchi-reverse-side2', String(alternateFeedSide2.checked));
            updateFeedOrder();
        });
        const helpDialog = document.getElementById('helpDialog');
        document.getElementById('t-help-open').addEventListener('click', () => helpDialog.showModal());
        document.getElementById('t-help-close').addEventListener('click', () => helpDialog.close());
        document.getElementById('t-help-done').addEventListener('click', () => helpDialog.close());
        helpDialog.addEventListener('cancel', event => {
            event.preventDefault();
            helpDialog.close();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && helpDialog.open) {
                helpDialog.close();
            }
        });
        helpDialog.addEventListener('click', event => {
            if (event.target === helpDialog) helpDialog.close();
        });
        document.getElementById('increasePageCount').addEventListener('click', () => adjustPageCount(1));
        document.getElementById('decreasePageCount').addEventListener('click', () => adjustPageCount(-1));
        document.getElementById('side1').addEventListener('click', () => copyPages('side1'));
        document.getElementById('side2').addEventListener('click', () => copyPages('side2'));
        if (systemThemePreference.addEventListener) {
            systemThemePreference.addEventListener('change', () => {
                if (document.getElementById('themeSelect').value === 'system') applyTheme();
            });
        } else {
            systemThemePreference.addListener(() => {
                if (document.getElementById('themeSelect').value === 'system') applyTheme();
            });
        }
        const savedLanguage = getSavedPreference('sahifalovchi-language', Object.keys(langData), 'uz');
        const savedTheme = getSavedPreference('sahifalovchi-theme', ['system', 'light', 'dark'], 'system');
        alternateFeedSide2.checked = getSavedPreference('sahifalovchi-reverse-side2', ['true', 'false'], 'true') === 'true';
        document.getElementById('themeSelect').dataset.value = savedTheme;
        setLanguage(savedLanguage);
        applyTheme();
        if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
            navigator.serviceWorker.register('./sw.js').catch(error => {
                console.error('Service worker registration failed:', error);
            });
        }
    