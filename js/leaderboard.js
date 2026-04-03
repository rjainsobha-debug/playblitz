// FIREBASE CONFIG (REPLACE WITH YOURS)
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

// INIT
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// SAVE SCORE
function saveScore(score) {
  db.collection("scores").add({
    score: score,
    time: new Date()
  });
}

// GET TOP SCORES
function loadLeaderboard() {
  db.collection("scores")
    .orderBy("score", "desc")
    .limit(5)
    .get()
    .then(snapshot => {
      let html = "<h3>🏆 Top Scores</h3>";
      snapshot.forEach(doc => {
        html += `<p>${doc.data().score}</p>`;
      });
      document.getElementById("leaderboard").innerHTML = html;
    });
}
