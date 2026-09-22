document.addEventListener('DOMContentLoaded', () => {
    // אלמנטים למערכת חיפוש משרות
    const jobsModal = document.getElementById('jobsModal');
    const openJobsBtns = document.querySelectorAll('.open-jobs-modal');
    
    // אלמנטים למערכת ניהול מעבדות
    const labsModal = document.getElementById('labsModal');
    const openLabsBtns = document.querySelectorAll('.open-labs-modal');
    
    // כל כפתורי הסגירה (X או כפתור סגירה)
    const closeBtns = document.querySelectorAll('.close-modal, .btn-modal-close');

    // פתיחת מודל משרות
    openJobsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            jobsModal.style.display = 'flex';
        });
    });

    // פתיחת מודל מעבדות
    openLabsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            labsModal.style.display = 'flex';
        });
    });

    // סגירת מודלים בלחיצה על כפתורי סגירה
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            jobsModal.style.display = 'none';
            labsModal.style.display = 'none';
        });
    });

    // סגירת מודל בלחיצה על הרקע הכהה מסביב
    window.addEventListener('click', (e) => {
        if (e.target === jobsModal) {
            jobsModal.style.display = 'none';
        }
        if (e.target === labsModal) {
            labsModal.style.display = 'none';
        }
    });
});

// פונקציית העתקה ללוח בלחיצה על האייקון

function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        buttonElement.classList.add('copied');
        setTimeout(() => {
            buttonElement.classList.remove('copied');
        }, 1500); // החיווי ייעלם אחרי 1.5 שניות
    }).catch(err => {
        console.error('שגיאה בהעתקת טקסט: ', err);
    });
}