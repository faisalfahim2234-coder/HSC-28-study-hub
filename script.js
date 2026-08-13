function hidePages() {

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });
}


function showPage(pageId) {

  hidePages();

  document
    .getElementById(pageId)
    .classList.remove("hidden");

  window.scrollTo(0, 0);
}


function toggleDark() {

  document.body.classList.toggle("dark");
}


function searchSubject() {

  const input =
    document
      .getElementById("search")
      .value
      .toLowerCase();

  const subjects =
    document.querySelectorAll(".subject");

  subjects.forEach(function(subject) {

    const text =
      subject.innerText.toLowerCase();

    if (text.includes(input)) {
      subject.style.display = "block";
    } else {
      subject.style.display = "none";
    }

  });
}


function showNote(type) {

  showPage("note");

  let content = "";

  if (type === "chem1") {

    content = `
      <h2>🧪 রসায়ন — অধ্যায় ১</h2>

      <br>

      <h3>ল্যাবরেটরির নিরাপদ ব্যবহার</h3>

      <p>
      রসায়ন পরীক্ষাগারে কাজ করার সময়
      নিরাপত্তা বিধি মেনে চলা অত্যন্ত গুরুত্বপূর্ণ।
      </p>

      <br>

      <h3>📌 গুরুত্বপূর্ণ বিষয়</h3>

      <p>
      • নিরাপত্তা সরঞ্জাম ব্যবহার<br>
      • রাসায়নিক পদার্থ ব্যবহারে সতর্কতা<br>
      • পরীক্ষাগারের নির্দেশনা মেনে চলা
      </p>
    `;

  }

  else if (type === "chem2") {

    content = `
      <h2>🧪 রসায়ন — অধ্যায় ২</h2>

      <br>

      <h3>গুণগত রসায়ন</h3>

      <p>
      বিভিন্ন আয়ন ও যৌগ শনাক্তকরণ
      এবং তাদের বৈশিষ্ট্য নিয়ে আলোচনা করা হয়।
      </p>
    `;

  }

  else if (type === "chem3") {

    content = `
      <h2>🧪 রসায়ন — অধ্যায় ৩</h2>

      <br>

      <h3>পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন</h3>

      <p>
      মৌলের পর্যায়বৃত্ত বৈশিষ্ট্য এবং
      বিভিন্ন ধরনের রাসায়নিক বন্ধন এই
      অধ্যায়ের গুরুত্বপূর্ণ বিষয়।
      </p>
    `;

  }

  else if (type === "matrix") {

    content = `
      <h2>📐 উচ্চতর গণিত — Matrix</h2>

      <br>

      <h3>Matrix কী?</h3>

      <p>
      সারি ও কলামে সাজানো সংখ্যাগুলোর
      আয়তাকার বিন্যাসকে Matrix বলা হয়।
      </p>

      <br>

      <h3>📌 গুরুত্বপূর্ণ বিষয়</h3>

      <p>
      • Matrix-এর order<br>
      • Addition ও subtraction<br>
      • Matrix multiplication<br>
      • Determinant
      </p>
    `;

  }

  else if (type === "vector") {

    content = `
      <h2>📐 উচ্চতর গণিত — Vector</h2>

      <br>

      <h3>Vector কী?</h3>

      <p>
      যে রাশির মান ও দিক উভয়ই থাকে
      তাকে Vector রাশি বলা হয়।
      </p>

      <br>

      <h3>📌 গুরুত্বপূর্ণ বিষয়</h3>

      <p>
      • Vector representation<br>
      • Vector addition<br>
      • Scalar multiplication<br>
      • Unit vector
      </p>
    `;
  }

  document.getElementById("noteContent").innerHTML = content;
}
