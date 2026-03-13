export default function initPanels(){

  if(window.__PANELS_INITIALIZED__) return
  window.__PANELS_INITIALIZED__ = true

  const leftToggle = document.getElementById("leftToggle")
  const rightToggle = document.getElementById("rightToggle")

  const leftPanel = document.querySelector(".column-left")
  const rightPanel = document.querySelector(".column-right")

  if(leftToggle && leftPanel){
    leftToggle.addEventListener("click", (e)=>{
      e.stopPropagation()
      leftPanel.classList.toggle("column-left--open")
    })
  }

  if(rightToggle && rightPanel){
    rightToggle.addEventListener("click", (e)=>{
      e.stopPropagation()
      rightPanel.classList.toggle("column-right--open")
    })
  }

  document.addEventListener("click",(e)=>{

    if(leftPanel && leftToggle &&
       !leftPanel.contains(e.target) &&
       !leftToggle.contains(e.target)){
        leftPanel.classList.remove("column-left--open")
    }

    if(rightPanel && rightToggle &&
       !rightPanel.contains(e.target) &&
       !rightToggle.contains(e.target)){
        rightPanel.classList.remove("column-right--open")
    }

  })

}