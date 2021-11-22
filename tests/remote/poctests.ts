
import {testRemote} from '@tremho/jove-test'

export async function pocTest(t: any) {
    console.log('>>>>>>>>>>>>> poctest starting <<<<<<<<<<<<')

    console.log('doing basic tests')
    await testRemote(t, 'add 2 3', 'addition test --- ', 5)
    await testRemote(t, 'subtract 102 60', 'subtraction test', 42)
    await testRemote(t, 'multiply 7 6', 'multiplication test', 42)
    await testRemote(t, 'divide 714 17', 'division test', 42)
    await testRemote(t, 'greet Steve', 'text return test', 'hello, Steve')

    await testRemote(t, 'fetch', 'async return test', 'Okay, here I am')

}
