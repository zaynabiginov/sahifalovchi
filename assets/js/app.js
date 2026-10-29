
        // Словарь переводов
        const langData = {
            uz: {
                title: "Sahifalovchi",
                footerTitle: "Dasturchi",
                footerName: "Zaynabidinov Rahmatillo",
                footerCaption: "Sahifalovchi · Buklet tayyorlagich",
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
                layoutToggle: "Betlarni bir qatorda ko‘rsatish",
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
                helpButton: "Yordam",
                helpTitle: "Saytdan foydalanish qo‘llanmasi",
                helpIntro: "Sahifalovchi oddiy kitobni A4 varaqlarda buklet qilib chop etish uchun sahifalarni kerakli tartibda hisoblaydi. Sahifalar sonini kiriting, ro‘yxatlarni tekshiring va printerda avval sinov nusxasini chop eting.",
                helpSections: [
                    {
                        title: "Sahifalar soni va hisoblash",
                        items: [
                            "«Barcha sahifalar soni» maydoniga kitobdagi jami sahifalar sonini kiriting. Yonidagi yuqori va pastki strelkalar sonni bittaga oshiradi yoki kamaytiradi.",
                            "«Hisoblash» tugmasi sahifalarni buklet uchun juftlaydi. Har bir A4 varaqda 4 ta kitob sahifasi bo‘ladi. Kiritilgan son 4 ga karrali bo‘lmasa, u keyingi mos songacha yaxlitlanadi.",
                            "Natija blokida hisoblangan sahifalar soni va kerak bo‘ladigan A4 varaqlar soni ko‘rsatiladi."
                        ]
                    },
                    {
                        title: "Sahifalar ro‘yxatlari va nusxa olish",
                        items: [
                            "«1-Tomon» ro‘yxati varaqlarning old tomoniga, «2-Tomon» ro‘yxati esa orqa tomoniga mo‘ljallangan. Har bir vergul bilan ajratilgan juftlik bitta varaqning chap va o‘ng sahifalarini bildiradi.",
                            "«Betlarni bir qatorda ko‘rsatish» belgilansa, juftliklar bir qatorda vergullar bilan davom etadi. Belgini olib tashlasangiz, har bir juftlik yangi qatordan boshlanadi; davom etayotgan qator vergul bilan tugaydi.",
                            "«Nusxalash» tugmasi tegishli ro‘yxatni nusxalaydi. Ro‘yxat matnini sichqoncha bilan belgilab, faqat tanlangan qismini ham nusxalashingiz mumkin. Matn maydoniga bosish ham butun ro‘yxatni yoki tanlangan qismini nusxalaydi.",
                            "Natija maydonlari o‘qish uchun mo‘ljallangan. Ularni tahrirlab bo‘lmaydi; ro‘yxat sahifalar soni yoki tartib sozlamalari o‘zgarganda qayta tuziladi."
                        ]
                    },
                    {
                        title: "Varaqlar tartibi va ko‘rgazmali ko‘rinish",
                        items: [
                            "«Betlarning varaqlardagi tartibi» bo‘limi har bir varaqdagi old va orqa sahifalarni kichik ko‘rinishda ko‘rsatadi.",
                            "«Varaqlar tartibini teskari o‘zgartirish» belgisi ro‘yxatlarni va ko‘rgazmali varaqlar ketma-ketligini o‘zgartiradi. Uni chop etish yoki varaqlarni taxlash usulingizga moslab yoqing.",
                            "Ko‘p varaqli natijalarda ko‘rgazmali ko‘rinish tez ishlashi uchun cheklanishi mumkin, ammo chop etish ro‘yxatlarida barcha varaqlar saqlanadi."
                        ]
                    },
                    {
                        title: "Saqlash, til va rang mavzusi",
                        items: [
                            "«TXT formatida saqlash» tugmasi ikkala tomon ro‘yxatini matn fayli sifatida yuklab beradi.",
                            "Yuqoridagi til ro‘yxati interfeys tilini o‘zgartiradi. Til tanlovi shu brauzer va qurilmada eslab qolinadi.",
                            "Rang mavzusi ro‘yxatidan «Tizim bo‘yicha», «Yorug‘» yoki «Qorong‘i» ko‘rinishni tanlang. Tanlov shu brauzer va qurilmada saqlanadi.",
                            "Pastdagi «Yordam» tugmasi ushbu qo‘llanmani ochadi. Oynani yopish uchun yuqoridagi xoch, «Yopish» tugmasi, Escape tugmasi yoki oynadan tashqariga bosing."
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
                footerTitle: "Разработчик",
                footerName: "Зайнабидинов Рахматулло",
                footerCaption: "Sahifalovchi · Создание буклетов",
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
                layoutToggle: "Показывать страницы в строку",
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
                helpButton: "Помощь",
                helpTitle: "Руководство по сайту",
                helpIntro: "«Брошюратор» рассчитывает порядок страниц для печати обычной книги в виде буклета на листах A4. Введите количество страниц, проверьте списки и сначала распечатайте пробный экземпляр.",
                helpSections: [
                    {
                        title: "Количество страниц и расчёт",
                        items: [
                            "Введите общее количество страниц книги в поле «Всего страниц». Стрелки рядом с полем увеличивают или уменьшают значение на одну страницу.",
                            "Кнопка «Рассчитать» формирует пары страниц для буклета. На каждом листе A4 размещаются 4 страницы книги. Если введённое число не кратно 4, оно округляется вверх до ближайшего подходящего значения.",
                            "В информационном блоке отображаются итоговое количество страниц и необходимое число листов A4."
                        ]
                    },
                    {
                        title: "Списки страниц и копирование",
                        items: [
                            "Список «Сторона 1» предназначен для лицевой стороны листов, «Сторона 2» — для оборотной. Каждая пара чисел, разделённая запятой, обозначает левую и правую страницы на одной стороне листа.",
                            "Если включено «Показывать страницы в строку», пары идут в одной строке и разделяются запятыми. Если снять галочку, каждая пара начинается с новой строки; запятая в конце строки показывает, что список продолжается.",
                            "Кнопка «Копировать» копирует соответствующий список. Можно выделить мышью часть текста и скопировать только выделенное. Щелчок по полю также копирует весь список или выделенный фрагмент.",
                            "Поля результата предназначены для просмотра. Изменять текст в них нельзя; списки перестраиваются при изменении числа страниц или настроек порядка."
                        ]
                    },
                    {
                        title: "Порядок листов и визуальный просмотр",
                        items: [
                            "Раздел «Визуальный порядок страниц» показывает пары страниц на лицевой и оборотной сторонах каждого листа.",
                            "Флажок «Обратить порядок листов» меняет порядок списков и последовательность листов в предпросмотре. Используйте его в зависимости от способа печати или укладки листов.",
                            "Для быстродействия предпросмотр очень большого количества листов может быть ограничен, но списки для печати всегда содержат все листы."
                        ]
                    },
                    {
                        title: "Сохранение, язык и тема",
                        items: [
                            "Кнопка «Сохранить в TXT» скачивает текстовый файл с обоими списками страниц.",
                            "Список языка вверху меняет язык интерфейса. Выбор запоминается в этом браузере на этом устройстве.",
                            "В списке темы выберите «Как в системе», «Светлая» или «Тёмная». Выбор темы также запоминается в этом браузере на этом устройстве.",
                            "Кнопка «Помощь» внизу открывает это руководство. Закройте окно крестиком, кнопкой «Закрыть», клавишей Escape или щелчком за пределами окна."
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
                footerTitle: "Developer",
                footerName: "Rahmatillo Zaynabidinov",
                footerCaption: "Sahifalovchi · Booklet maker",
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
                layoutToggle: "Show pages inline",
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
                helpButton: "Help",
                helpTitle: "How to use the site",
                helpIntro: "Booklet Maker calculates page order for printing a regular book as a booklet on A4 sheets. Enter the page count, review the lists, and print a test copy before printing the full job.",
                helpSections: [
                    {
                        title: "Page count and calculation",
                        items: [
                            "Enter the book’s total number of pages in the “Total pages” field. The up and down arrows next to it increase or decrease the value by one.",
                            "The “Calculate” button arranges page pairs for booklet printing. Each A4 sheet holds 4 book pages. If the entered count is not divisible by 4, it is rounded up to the next suitable number.",
                            "The information panel shows the resulting page count and the number of A4 sheets required."
                        ]
                    },
                    {
                        title: "Page lists and copying",
                        items: [
                            "The “Side 1” list is for the front of the sheets; “Side 2” is for the back. Each comma-separated pair represents the left and right pages on one side of a sheet.",
                            "When “Show pages inline” is checked, pairs continue on one line separated by commas. When unchecked, each pair starts on a new line; a trailing comma indicates that the list continues.",
                            "The “Copy” button copies its corresponding list. You can select part of the text with the mouse to copy only that selection. Clicking inside a field also copies the whole list or the selected text.",
                            "The result fields are read-only. Their contents are regenerated when the page count or ordering options change."
                        ]
                    },
                    {
                        title: "Sheet order and visual preview",
                        items: [
                            "The “Visual page order” section shows the page pairs on the front and back of each sheet.",
                            "The “Reverse sheet order” checkbox changes both the lists and the preview sequence. Use it to match your printing or stacking workflow.",
                            "For responsiveness, the visual preview may be limited for very large jobs, but the print lists always include every sheet."
                        ]
                    },
                    {
                        title: "Saving, language, and theme",
                        items: [
                            "The “Save as TXT” button downloads a text file containing both page lists.",
                            "Use the language menu at the top to change the interface language. The selection is remembered in this browser on this device.",
                            "Choose “System”, “Light”, or “Dark” in the theme menu. The theme selection is also remembered in this browser on this device.",
                            "The “Help” button at the bottom opens this guide. Close the dialog with the X, the “Close” button, Escape, or by clicking outside the dialog."
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
        let sheetPairs = [];
        const copyResetTimers = {};
        let isCalculating = false;

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
            document.getElementById('languageSelect').value = lang;

            document.getElementById('t-title').textContent = t.title;
            document.getElementById('t-footer-title').textContent = t.footerTitle;
            document.getElementById('t-footer-name').textContent = t.footerName;
            document.getElementById('t-footer-caption').textContent = t.footerCaption;
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
            document.getElementById('t-copy-side1').textContent = t.copyButton;
            document.getElementById('t-copy-side2').textContent = t.copyButton;
            document.getElementById('t-btn-save').textContent = t.btnSave;
            document.getElementById('t-preview-title').textContent = t.previewTitle;
            document.getElementById('t-invert-label').textContent = t.invertLabel;
            document.getElementById('t-preview-empty').textContent = t.previewEmpty;
            document.getElementById('t-theme-system').textContent = t.themeSystem;
            document.getElementById('t-theme-light').textContent = t.themeLight;
            document.getElementById('t-theme-dark').textContent = t.themeDark;
            document.getElementById('languageSelect').setAttribute('aria-label', t.languageLabel);
            document.getElementById('themeSelect').setAttribute('aria-label', t.themeLabel);
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
            const theme = document.getElementById('themeSelect').value;
            savePreference('sahifalovchi-theme', theme);
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
            const orderedPairs = isInverted ? [...sheetPairs].reverse() : sheetPairs;
            const preview = document.getElementById('sheetPreview');
            const emptyMessage = document.getElementById('t-preview-empty');
            const limitMessage = document.getElementById('t-preview-limit');
            const description = document.getElementById('t-feed-description');
            const displayLimit = 200;

            description.textContent = isInverted ? t.feedInverted : t.feedNormal;
            preview.replaceChildren();
            emptyMessage.classList.toggle('hidden', orderedPairs.length > 0);

            orderedPairs.slice(0, displayLimit).forEach((sheet, index) => {
                const card = document.createElement('article');
                card.className = 'sheet-card text-xs text-slate-700';

                const heading = document.createElement('h3');
                heading.className = 'mb-2 font-semibold';
                const physicalSheet = isInverted ? sheetPairs.length - index : index + 1;
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
                sheet.back.forEach(page => {
                    const pageCell = document.createElement('span');
                    pageCell.className = 'sheet-page';
                    pageCell.textContent = page;
                    back.append(pageCell);
                });

                card.append(heading, frontLabel, front, backLabel, back);
                preview.append(card);
            });

            const omitted = orderedPairs.length - displayLimit;
            limitMessage.classList.toggle('hidden', omitted <= 0);
            if (omitted > 0) {
                limitMessage.textContent = t.previewLimit
                    .replace('{shown}', displayLimit)
                    .replace('{total}', orderedPairs.length);
            } else {
                limitMessage.textContent = '';
            }
        }

        function updateFeedOrder() {
            const isInverted = document.getElementById('invertFeed').checked;
            const orderedPairs = isInverted
                ? [...sheetPairs].reverse()
                : sheetPairs;
            document.getElementById('side1').value = formatPageList(orderedPairs, 'front', 'side1');
            document.getElementById('side2').value = formatPageList(orderedPairs, 'back', 'side2');
            renderSheetPreview();
        }

        function formatPageList(sheets, side, fieldId) {
            const separator = document.getElementById(`inline-${fieldId}`).checked ? ', ' : ',\n';
            return sheets.map(sheet => sheet[side].join(', ')).join(separator);
        }

        function updatePageListLayout(fieldId) {
            const orderedPairs = document.getElementById('invertFeed').checked
                ? [...sheetPairs].reverse()
                : sheetPairs;
            const side = fieldId === 'side1' ? 'front' : 'back';
            document.getElementById(fieldId).value = formatPageList(orderedPairs, side, fieldId);
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

            const calculateButton = document.getElementById('t-btn-calc');
            isCalculating = true;
            calculateButton.disabled = true;
            calculateButton.setAttribute('aria-busy', 'true');
            calculateButton.classList.add('calculating');

            try {
                let totalSheets = totalPages / 4;
                document.getElementById('totalSheets').textContent = totalSheets;
                document.getElementById('pagesResult').textContent = totalPages;

                sheetPairs = [];

                const endPage = totalPages;
                const sheetsInBook = totalPages / 4;

                for (let i = 0; i < sheetsInBook; i++) {
                    let p1 = endPage - (2 * i);
                    let p2 = 1 + (2 * i);
                    let p3 = 1 + (2 * i) + 1;
                    let p4 = endPage - (2 * i) - 1;

                    sheetPairs.push({ front: [p1, p2], back: [p3, p4] });
                }

                updateFeedOrder();
            } finally {
                window.setTimeout(() => {
                    calculateButton.classList.remove('calculating');
                    calculateButton.removeAttribute('aria-busy');
                    calculateButton.disabled = false;
                    isCalculating = false;
                }, 1400);
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
        document.getElementById('languageSelect').addEventListener('change', event => setLanguage(event.target.value));
        document.getElementById('themeSelect').addEventListener('change', applyTheme);
        document.getElementById('invertFeed').addEventListener('change', updateFeedOrder);
        document.getElementById('inline-side1').addEventListener('change', () => updatePageListLayout('side1'));
        document.getElementById('inline-side2').addEventListener('change', () => updatePageListLayout('side2'));
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
        window.onload = () => {
            const savedLanguage = getSavedPreference('sahifalovchi-language', Object.keys(langData), 'uz');
            const savedTheme = getSavedPreference('sahifalovchi-theme', ['system', 'light', 'dark'], 'system');
            document.getElementById('themeSelect').value = savedTheme;
            setLanguage(savedLanguage);
            applyTheme();
        };
        if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
            navigator.serviceWorker.register('./sw.js').catch(error => {
                console.error('Service worker registration failed:', error);
            });
        }
    