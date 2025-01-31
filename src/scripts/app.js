// Bu dosya, sihirli 8 topunun işlevselliğini sağlar.

const responses = [
    "Evet.",
    "Hayır.",
    "Belirsiz.",
    "Tekrar sor.",
    "Kesinlikle.",
    "Bunu yapabilirsin.",
    "Bilmiyorum.",
    "Şu an için uygun değil.",
    "Kesinlikle evet.",
    "Asla.",
    "Belki.",
    "Şansın yaver gidecek.",
    "Buna güvenebilirsin.",
    "Kuşkularında haklısın.",
    "Elbette.",
    "Şüphesiz.",
    "Maalesef hayır.",
    "Kararsızım.",
    "Olumlu görünüyor.",
    "Şansını zorla.",
    "İmkansız.",
    "Neden olmasın?",
    "Bekle ve gör.",
    "Şu an söyleyemem.",
    "Biraz daha bekle.",
    "Umutlu ol.",
    "Hayal kırıklığına uğrayabilirsin.",
    "Yıldızlar bunu destekliyor.",
    "Doğru zaman değil.",
    "Vazgeçme."
];

const responseColors = {
    "Evet.": "#2ecc71",
    "Hayır.": "#e74c3c",
    "Belirsiz.": "#95a5a6",
    "Tekrar sor.": "#3498db",
    "Kesinlikle.": "#27ae60",
    "Bunu yapabilirsin.": "#2ecc71",
    "Bilmiyorum.": "#95a5a6",
    "Şu an için uygun değil.": "#e67e22",
    "Kesinlikle evet.": "#27ae60",
    "Asla.": "#c0392b",
    "Belki.": "#f1c40f",
    "Şansın yaver gidecek.": "#16a085",
    "Buna güvenebilirsin.": "#2ecc71",
    "Kuşkularında haklısın.": "#e67e22",
    "Elbette.": "#27ae60",
    "Şüphesiz.": "#27ae60",
    "Maalesef hayır.": "#c0392b",
    "Kararsızım.": "#95a5a6",
    "Olumlu görünüyor.": "#2ecc71",
    "Şansını zorla.": "#f1c40f",
    "İmkansız.": "#c0392b",
    "Neden olmasın?": "#3498db",
    "Bekle ve gör.": "#9b59b6",
    "Şu an söyleyemem.": "#95a5a6",
    "Biraz daha bekle.": "#f1c40f",
    "Umutlu ol.": "#2ecc71",
    "Hayal kırıklığına uğrayabilirsin.": "#e74c3c",
    "Yıldızlar bunu destekliyor.": "#9b59b6",
    "Doğru zaman değil.": "#e67e22",
    "Vazgeçme.": "#16a085"
};

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("ask-button");
    const questionInput = document.getElementById("question");
    const answerDisplay = document.getElementById("answer");
    const eightBall = document.querySelector(".eight-ball");

    button.addEventListener("click", () => {
        if (questionInput.value.trim() === "") {
            alert("Lütfen bir soru sorun!");
            return;
        }

        eightBall.style.display = "none";
        answerDisplay.textContent = "...";
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * responses.length);
            const selectedAnswer = responses[randomIndex];
            answerDisplay.textContent = selectedAnswer;
            
            // Arka plan rengini değiştir
            document.body.style.transition = "background-color 1s ease";
            document.body.style.backgroundColor = responseColors[selectedAnswer];
        }, 1000);
    });
});