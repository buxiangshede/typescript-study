/*
 * @Author: shasha0102 shasha.liu@bizops.com.cn
 * @Date: 2022-11-24 21:14:35
 * @LastEditors: shasha0102 shasha.liu@bizops.com.cn
 * @LastEditTime: 2022-11-24 21:18:00
 * @FilePath: /typeScript/ts-course/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

//编译 tsc 01_index.js 
let a: number;
a = 10;
console.log(a, 'ts')

const class1 = (params: number): number => {
  console.log(params, 'params')
  return params;
}

const b: number = class1(22)
console.log(b, 'b')

export { }