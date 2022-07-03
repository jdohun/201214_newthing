$("body").append("<input class='input'>")
  .append("<button class='save' onclick='Save()'>저장</button>")
  .append("<button class='output' onclick='Make()'>생성</button>")
  .append("<div class='SaveList'>저장된 인덱스 :</div>");

//숙제 :

let IndexArray = [];

function DeleteObject(objectclass){
  document.querySelector(`.${objectclass}`).detach;
}

function Save(){
  let input = document.querySelector(".input").value
  if(input == ''){}
  else{
    IndexArray.push(input);
  }
  console.log(IndexArray);
  document.querySelector(".SaveList").innerHTML += ` ${input}`;
  document.querySelector(".input").value = null;
}

function Make(){
  factory.Builder(IndexArray, 70, 700,
    `https://lh3.googleusercontent.com/proxy/uFGs7mjIg4664leycINNvkttA88phkVi2z1P-DjXkd1kyX_xVn7YmOfNfdPrAkFXSh4glvOYoSJNT9334FQqFNn7cMgKWwSsRi6CPH_Q5C_Glsn3g3kOy2P5Bm12i9b7wkDKTY7KmLGMU18vCAo-AUq9PxDuYRixSfBTGg`);
  IndexArray = [];
  document.querySelector(".SaveList").innerHTML = `저장된 인덱스 :`;

}

function AIProgress(object, AIFuncArray){
  let _object = object;
  let _AIFuncArray = AIFuncArray;

  return function(){
    let i;
    for(i=0; i<_AIFuncArray.length; ++i){
      if(_AIFuncArray[i] == factory.AIFactory[0]){
        setInterval(_AIFuncArray[i](_object), 50);
      }
      else if(_AIFuncArray[i] == factory.AIFactory[2]){
        setInterval(_AIFuncArray[i](_object), 100);
      }
    }
  }
}

class UnitObject{
  constructor(AIArray, x, y, imageurl = ""){
    this.x = x;
    this.y = y;
    $("body").append(`<div class="Object" style="position:absolute; left:${this.x}px; top:${this.y}px;"></div>`);
    this.body = $("body>div:last-child");
    this.body.css("backgroundImage", `url(${imageurl})`);
    setInterval(AIProgress(this, AIArray, 1500));
  }
}

class Factory{
  constructor(){
    this.AIFactory = [];
    this.AIArray = [];
  }
  Push(AI){
    this.AIFactory.push(AI);
  }
  Builder(aiindexArray, x, y, url){
   let i;
   for(i = 0; i < aiindexArray.length; ++i){
       this.AIArray.push(this.AIFactory[aiindexArray[i]]);
   }
   return new UnitObject(this.AIArray, x, y, url), this.AIArray = [];
  }
}

let factory = new Factory();
factory.Push(function(object){
  object.x += 1;
  object.body.css("left",`${object.x}px`);
});
factory.Push(function(object){
  object.y += 1;
  object.body.css("top",`${object.y}px`);
});
factory.Push(function (object){
  object.y -= 1;
  object.body.css("top",`${object.y}px`);
});

/*
$("body").append("<input type='text' class='Choice'>")
  .append("<div class='ObjectZone'></div>");

function DeleteObject(object ,objectx, objecty, clickx, clicky){
  if(objectx >= clickx-50 && objectx <= clickx+50 && objecty >= clicky-50 && objecty <= clicky+50){
    $(object).detach();
  }
}

function FindLocation(event){
  let clickx = event.clientX;
  let clicky = event.clientY;

  return DeleteObject(this ,Ball.x,Ball.y, clickx, clicky);
}

function AIProgress(object, AIFunc){
  let _object = object;
  let _AIFunc = AIFunc;
  return function(){
    _AIFunc( _object);
  }
}

class MovementObject{
  constructor(AI, x, y, imageurl = ""){
    this.x = x;
    this.y = y;
    this.direction = {x:8,y:-8};
    $("body").append(`<div class="Object" style="position:absolute; left:${this.x}px; top:${this.y}px;"></div>`);
    this.body = $("body>div:last-child");
    this.body.css("backgroundImage", imageurl);
    setInterval(AIProgress(this, AI), 50);
  }
}

let Ball = new MovementObject(function(object){
  object.x += object.direction.x;
  object.y += object.direction.y;
  object.body.css("left", `${object.x}px`);
  object.body.css("top", `${object.y}px`);
  if(object.x >= 600){
    object.direction.x = -8;
  }
  if(object.x <= 70){
    object.direction.x = 8;
  }
  if(object.y >= 400){
    object.direction.y = -8;
  }
  if(object.y <= 100){
    object.direction.y = 8;
  }
},70, 100
  ,`url(https://www.pngitem.com/pimgs/m/112-1122723_transparent-tornado-clipart-black-and-white-tornado-clipart.png)`);

function DeleteEffect(object){
  let _object = object;

  return function(){
    _object.body.detach();
  };
}

class Effect{
  constructor(inner, x, y, life, animationname = ""){
    this.inner = inner;
    this.x = x;
    this.y = y;
    this.life = life;
    $("body").append(`<div class="Effect ImageEffect" style="position:absolute; left:${this.x}px; top:${this.y}px;">${this.inner}</div>`);
    this.body = $("body>div:last-child");
    this.body.css("animationDuration", `${life / 1000.0}s`);
    this.body.css("animationName", animationname);
    setTimeout(DeleteEffect(this), this.life);
  }
}

function Create(){
  if(document.querySelector(".Choice").value === "fire"){
    new Effect(``, event.clientX, event.clientY, 2000, "image-effect-fire");
  }
  else if(document.querySelector(".Choice").value === "wind"){
    new Effect(``, event.clientX, event.clientY, 2000, "image-effect-wind");
  }
  else if(document.querySelector(".Choice").value === ""){

  }
  else if(document.querySelector(".Choice").value === ""){

  }
}

$("body").click(Create);
$(".Object").click(FindLocation);
*/
