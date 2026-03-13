export async function loadHTML(path, container){

  const response = await fetch(path)

  if(!response.ok){
    console.error("Failed to load", path)
    container.innerHTML = `<p>Failed to load ${path}</p>`
    return
  }

  container.innerHTML = await response.text()
}