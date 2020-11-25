var btnExportCV, btnDetailCV, imgFlag;
var imgCV, nameCV, jobCV, eContactTemp, listContact, eSkillTemp, listSkill, descriptionCV, eExperienceTemp, listExperience, listProduct, eProductTemp;
var langPage = "vn";
$(function() {

  btnExportCV = $("#btn-export-cv");
  btnDetailCV = $("#btn-detail-cv");
  imgFlag = $(".img-flag");

  //element content
  imgCV = $(".img-cv");
  nameCV = $(".name-cv");
  jobCV = $(".job-cv");
  eContactTemp = $("#e-contact-temp");
  listContact = $(".list-contact");
  eSkillTemp = $("#e-skill-temp");
  listSkill = $(".list-skill");
  descriptionCV = $(".description-cv");
  eExperienceTemp = $("#e-experience-temp");
  listExperience = $(".list-experiences .row");
  listProduct = $(".list-product .row");
  eProductTemp = $("#e-product-temp");

  //run particle
  particlesJS.load('particles-js', '/plugins/particles/particles.json');

  //view content
  console.log(INFOR_CV_VN);
  viewContentCV(INFOR_CV_VN);

  //tool page
  clickBtnExportCV();
  clickBtnDetailCV();
  clickImgFlag();
})

function clickBtnExportCV() {
  btnExportCV.click(function() {
    let printElemnt = $("main").clone();
    printElemnt.find(".product").remove();
    printElemnt.printThis({
      importCSS: true,
      importStyle: true,
      loadCSS: "./style.css",
    })
  })
}

function clickBtnDetailCV() {
  btnDetailCV.click(function() {
    window.open("./public/CVNguyenTrongDuong_EN.docx", "_blank");
  })
}

function clickImgFlag() {
  imgFlag.click(function() {
      let lang = $(this).attr("data-lang");
      if(lang != langPage) {
        langPage = lang;
        if(langPage == 'vn') {
          //set tool
          btnDetailCV.find("span").html("Chi tiết CV");
          btnExportCV.find("span").html("Xuất CV");
          //set content
          viewContentCV(INFOR_CV_VN);
        } else if(langPage == 'en') {
          //set tool
          btnDetailCV.find("span").html("Detail CV");
          btnExportCV.find("span").html("Export CV");
          //set content
          viewContentCV(INFOR_CV_EN);
        }
      }
  })
}

function viewField(text) {
  return text ? text : "";
}

function viewContentCV(inforCV) {
  imgCV.attr("src", viewField(inforCV.imgCV));
  imgCV.attr("alt", viewField(inforCV.name));
  nameCV.html(viewField(inforCV.name));
  jobCV.html(viewField(inforCV.job));
  
  //view contact
  let {contacts} = inforCV;
  if(contacts) {
    let viewContacts = contacts.map(data => {
      let eContactClone = eContactTemp.clone().removeAttr("id").removeClass("d-none");
      eContactClone.find("a").attr("href", viewField(data.href));
      eContactClone.find(".icon-contact").html(viewField(data.icon));
      eContactClone.find(".val-contact").html(viewField(data.value));
      return eContactClone;
    })
    listContact.html(viewContacts);
    listContact.append(eContactTemp);
  }

  //view skill
  let {skills} = inforCV;
  if(skills) {
    let viewSkills = skills.map(data => {
      let eSkillClone = eSkillTemp.clone().removeAttr("id").removeClass("d-none");
      eSkillClone.find(".icon-skill").html(viewField(data.icon));
      eSkillClone.find(".val-skill").html(viewField(data.value));
      return eSkillClone;
    })
    listSkill.html(viewSkills);
    listSkill.append(eSkillTemp);
  }

  //view description-cv
  descriptionCV.html(viewField(inforCV.descriptionCV));

  //view experiences
  let {experiences} = inforCV;
  if(experiences) {
    let viewExperiences = experiences.map(data => {
      let eExperienceClone = eExperienceTemp.clone().removeAttr("id").removeClass("d-none");
      eExperienceClone.find(".name-experience").html(viewField(data.name));
      eExperienceClone.find(".company-experience").html(viewField(data.company));
      eExperienceClone.find(".desc-experience").html(viewField(data.description));
      let liNoteExperienceTemp = eExperienceClone.find("li");
      let {info} = data;
      if(info) {
        let viewNote = info.map(el => {
          let liNoteExperienceClone = liNoteExperienceTemp.clone();
          liNoteExperienceClone.find(".name-note-experience").html(viewField(el.name) + ':');
          liNoteExperienceClone.find(".val-note-experience").html(viewField(el.value));
          return liNoteExperienceClone;
        });
        eExperienceClone.find(".note-experience").html(viewNote);
      }
      return eExperienceClone;
    })
    listExperience.html(viewExperiences);
    listExperience.append(eExperienceTemp);
  }

  //view demo
  let {products} = inforCV;
  if(products) {
    let viewProducts = products.map(data => {
      let eProductClone = eProductTemp.clone().removeAttr("id").removeClass("d-none");
      eProductClone.find("a").attr("href", viewField(data.href));
      let img = eProductClone.find("img");
      img.attr("src", viewField(data.img));
      img.attr("alt", viewField(data.name));
      eProductClone.find(".name-product").html(viewField(data.name));
      eProductClone.find(".desc-product").html(viewField(data.description));
      return eProductClone;
    })
    listProduct.html(viewProducts);
    listProduct.append(eProductTemp);
  }
}