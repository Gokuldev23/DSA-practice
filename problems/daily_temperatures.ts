import { Stack } from "../structures/stack.ts"




const dailyTemp = (tmp:number[]):number[] => {

  const pending = new Stack<number>()          // stack holds INDICES, not temps
  const output:number[] = new Array<number>(tmp.length).fill(0)

  for(let i=0;i<tmp.length;i++) {
    while(!pending.isEmpty() && tmp[pending.peek()!]! < tmp[i]!) {
        let pop = pending.pop()!
        let diff = i - pop
        output[pop] = diff
    }
    pending.push(i)
  }
  console.log({output})
  
  return output
}
dailyTemp([73, 74, 75, 71, 69, 72, 76, 73])