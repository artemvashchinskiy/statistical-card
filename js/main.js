import { columns } from './core/columnMap.js'
import { loadHTML } from './core/loadHTML.js'
import { loadCSS } from './core/loadCSS.js'
import initPanels from "./layout/panelController.js";
import initLayout from './layout/layoutController.js'

async function init(){

  const slots = document.querySelectorAll('[data-column]')

  for(const slot of slots){

    const name = slot.dataset.column
    const config = columns[name]

    if(!config) continue

    loadCSS(config.css)

    await loadHTML(config.html, slot)

    try{
      const module = await import(config.js)
      module.default?.(slot)
    }catch(e){
      console.warn("No module for", name)
    }

  }

  initLayout()
  initPanels()

}

window.addEventListener("DOMContentLoaded", init)