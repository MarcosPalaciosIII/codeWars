function findRoutes(routes) {
var originalRoute = routes
var theMainRoute = [];
  originalRoute.map(oneRoute => {
    for(var i = 0; i < originalRoute.length; i++) {
      if(theMainRoute.length === 0) {
        theMainRoute.push(oneRoute[0], oneRoute[1]);
        continue;
      } else if(theMainRoute[0] === originalRoute[i][1]) {
        if(!theMainRoute.includes(originalRoute[i][0])) {
          theMainRoute.unshift(originalRoute[i][0]);
          continue;
        }
      } else if(theMainRoute[theMainRoute.length-1] === originalRoute[i][0]) {
        if(!theMainRoute.includes(originalRoute[i][1])){
          theMainRoute.push(originalRoute[i][1])
          continue;
        }
      }
    }
  })
    console.log(theMainRoute.join(', '))
    return theMainRoute.join(', ');
  }




  // ------------------------------------------------------



  #import <Foundation/Foundation.h>
  NSString *findRoutes(NSArray *routes){

      NSMutableArray * routesM = [routes mutableCopy];
      NSMutableArray * answer = [@[routes[0][0]] mutableCopy];
      do{
          for(int i = (int)routesM.count - 1; i >= 0; i--){
              if([[answer lastObject] isEqualToString:routesM[i][0]]){
                  [answer addObject:routesM[i][1]];
                  [routesM removeObjectAtIndex:i];
              } else if([[answer firstObject] isEqualToString:routesM[i][1]]){
                  [answer insertObject:routesM[i][0] atIndex:0];
                  [routesM removeObjectAtIndex:i];
              }
          }
      } while (routesM.count > 0);
      return [answer componentsJoinedByString:@", "];
  }
