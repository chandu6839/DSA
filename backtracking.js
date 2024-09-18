// COmbiantion sum [2,3,6,7],7

const combinationSum = (candidates, target) => {
    const result = [];
    const backTrack = (s,t,p) => {
        if(t === 0){ 
            result.push([...p]);
            return;
        }
        if(t < 0) return;
        for (let i = s; i < candidates.length; i++) {
            p.push(candidates[i]);
            backTrack(i, t-candidates[i], p);
            p.pop();
        }
    }
    backTrack(0,target, []);
    return result;
}