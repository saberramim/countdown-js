A compact, browser-ready countdown timer that starts from 120 seconds and displays time in the mm:ss format.
It’s dependency-free and designed for quick integration into any web project.

<img width="734" height="466" alt="Snap35" src="https://github.com/user-attachments/assets/54fb425f-7311-4604-a867-622225b5cbd3" />

Key features
mm:ss display: Time counts down from 02:00 to 00:00.
State persistence: Uses sessionStorage to retain the current count and status (start, pause, reset) across page reloads.
No external libraries: Vanilla JavaScript with a tiny footprint.
Robust behavior: Guards against negative values and stops gracefully at zero.
How it works
The timer leverages setInterval to decrement every second.
UI states are synchronized in real time:
Start disables the start control and enables pause/reset.
Pause freezes the timer and preserves state.
Reset returns to the initial 02:00 and resets UI controls.
All changes are saved to sessionStorage to ensure continuity during the user session.
Benefits and use cases
Ideal for onboarding wizards, quizzes, or any scenario requiring a lightweight, reliable countdown.
Quick to integrate into plain HTML/JS projects without build steps.
How to integrate
Include the JavaScript in your page and connect your HTML controls (IDs/classes) as expected.
Initialize on DOMContentLoaded and call onLoadCounter() to hydrate from storage.
Contact / Usage
Implemented in vanilla JavaScript; suitable for production environments where minimal dependencies are preferred.


......


یک شمارش معکوس سبک‌وزین، قابل اجرا در مرورگر، با شروع از 120 ثانیه و نمایش زمان به صورت mm:ss. بدون نیاز به کتابخانه‌ها و با ادغام سریع در هر پروژه وب.

ویژگی‌های کلیدی
نمایش mm:ss: از 02:00 تا 00:00 کاهش می‌یابد.
پایداری حالت: از sessionStorage برای نگهداری مقدار شمارش و وضعیت (start، pause، reset) در طول نشست استفاده می‌شود.
بدون وابستگی به کتابخانه‌ها: پیاده‌سازی با جاوااسکریپت خام و با حجم کم.
رفتار مقاوم: از منفی شدن مقدار جلوگیری می‌کند و به صورت ایمن به صفر می‌رسد.
نحوه کار
از setInterval برای کم کردن هر ثانیه استفاده می‌شود.
وضعیت UI به‌طور هم‌زمان بروز می‌شود:
شروع: دکمهٔ Start غیرفعال می‌شود و Pause/Reset فعال می‌شوند.
توقف: تایمر متوقف می‌شود و وضعیت ذخیره می‌گردد.
ریست: مقدار به 02:00 برمی‌گردد و کنترل‌ها بازنشانی می‌شوند.
همه تغییرات در sessionStorage ذخیره می‌شود تا در طول نشست کاربر، تجربه‌ی پیوسته‌ای داشته باشد.
کاربرد/مزایا
مناسب برای پروژهای وبی که به یک شمارش معکوس پایدار، با کمترین وزن و بدون وابستگی نیاز دارند.
نحوه استفاده
کد را در صفحه خود گنجانید و عناصر HTML با شناسه/کلاس‌های مورد انتظار را وصل کنید.
با استفاده از DOMContentLoaded مقداردهی اولیه کنید و onLoadCounter() را فراخوانی کنید تا از ذخیره‌سازی بازیابی شود.
