// Funksiya: Təkrarlanan rəqəmləri çıxararaq yeni bir array qaytarır
function removeDuplicates(arr) {
    // Set obyektindən istifadə edərək yalnız unikal dəyərləri saxlayır
    const uniqueSet = new Set(arr);
    
    // Set obyektini arrayə çevirərək qaytarır
    return Array.from(uniqueSet);
}

// Nümunə istifadəsi
const numbersArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = removeDuplicates(numbersArray);
console.log("Yeni array (təkrarlananlar çıxarıldı):", uniqueArray);