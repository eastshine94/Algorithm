function solution(routes) {
    routes.sort((a,b) => a[0] - b[0]);
    const cameras = [];
    for(let i =0; i<routes.length; i++){
        const routeIn = routes[i][0];
        const routeOut = routes[i][1];
        if(cameras.length === 0){
            cameras.push([routeIn, routeOut]);
        }
        else {
            let flag = false;
            for(let j = 0; j<cameras.length; j++){
                const setCameraIn = cameras[j][0];
                const setCameraOut = cameras[j][1];
      
                if((setCameraIn <= routeIn  &&  routeIn <= setCameraOut)){
                    flag = true;
                    cameras[j][0] = Math.max(routeIn, setCameraIn);
                    cameras[j][1] = Math.min(routeOut, setCameraOut);
                    break;
                }
            }
            if(!flag){
                cameras.push([routeIn, routeOut]);
            }
        }
    }
    return cameras.length;
}