const faqData = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
      id: 2,
      question: "What do we do?",
      answer:
        "Building learning communities with Our Affordable & Competent Courses",
    },
    {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!",
    },
  ];
  
  createFaq();
  
  // const accordianBody;
  const faqs = [];
  
  function showFaq() {
    let all = document.querySelectorAll('.show_btn');
    let all_p = document.querySelectorAll(".hidden");
    let all_btn = document.querySelectorAll(".show_btn");
    for(let i = 0; i<all.length; i++){
      all[i].addEventListener('click', ()=>{
        if(all_p[i].style.display === 'block'){
          all_p[i].style.display = 'none';
          all_btn[i].innerText = '+';
        }else{
          all_p[i].style.display = 'block';
          all_btn[i].innerText = '-';
        }
      });
    };
  }
  
  showFaq();
  
  function createFaq() {
    faqData.forEach((ele)=>{
      let node = document.createElement("div");
      let ques = document.createElement('div');
      let q = document.createElement('h3');
      let plus = document.createElement('h3');
      let para = document.createElement('p');
      ques.appendChild(q);
      ques.appendChild(plus);
      q.innerText = ele.question;
      plus.innerText= '+';
      para.innerText = ele.answer;
      node.appendChild(ques);
      node.appendChild(para);
      plus.classList.add('show_btn');
      ques.classList.add('faq_header');
      node.classList.add('faq');
      para.classList.add('hidden');
      let b = document.querySelector('.accordian_body');
      b.appendChild(node);
    });
  }
  
  let edit = document.querySelectorAll('.show_btn');
  edit.forEach((ele)=>{
    ele.style.textAlign = 'center';
  })