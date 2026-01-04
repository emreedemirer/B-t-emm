@echo off
echo Git kurulumu (Tam Yol ile) baslatiliyor...

set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

%GIT_PATH% init
%GIT_PATH% add .
%GIT_PATH% commit -m "FinansPro v1.0 - Ilk Kurulum"
%GIT_PATH% branch -M main
%GIT_PATH% remote remove origin
%GIT_PATH% remote add origin https://github.com/emreedemirer/B-t-emm.git
%GIT_PATH% push -u origin main

echo.
echo ==========================================
echo ISLEM TAMAMLANDI!
echo Eger hata gormuyorsaniz, GitHub sayfasini yenileyin.
echo ==========================================
pause
