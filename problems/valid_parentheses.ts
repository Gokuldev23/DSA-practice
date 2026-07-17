import { Stack } from "../structures/stack";

const isvalid = (str: string): boolean => {
    
 const closingBr: Record<string, string> = {
 ")":"(",
 "]":"[",
 "}":"{"
 }

  const arr:string[] = str.split('')
  const stack = new Stack()

  for(let i = 0;i<arr.length;i++) {
        let ele = arr[i]
        let curr = ele && closingBr[ele]
        if(ele && curr && curr === stack.peek()){
            stack.pop()
            continue
        }
        stack.push(ele)
  }
 console.log({str:str,ans:stack.isEmpty()})
 return stack.isEmpty()

};

isvalid("()");
isvalid("()[]{}");
isvalid("(]");
isvalid("([)]")
isvalid("{[]}")