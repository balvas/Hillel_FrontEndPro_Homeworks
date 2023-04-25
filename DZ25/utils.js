"use strict"
export async function getSwapiData(start, end) {
   let response = await fetch(`${start}/${end}`, {
      method: 'GET'
   });
   try {
      return {
         status: 'success',
         data: await response.json(),
      }
   } catch (event) {
      console.error(event)
      return {
         status: 'error',
         data: null,
      }
   }
}
