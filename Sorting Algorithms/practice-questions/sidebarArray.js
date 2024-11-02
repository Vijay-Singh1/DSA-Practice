const root = [
      {
        "child1": [
          {
            "Gchild1": [
              {
                "GGchild1": [
                  {
                    "GGGchild1": [
                      {
                        "GGGGchild1": ["name1"]
                      },
                      {
                        "GGGGchild2": ["name2"]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "Gchild2": [
              {
                "GGchild2": [
                  {
                    "GGGchild3": []
                  },
                  {
                    "GGGchild4": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "child2": [
          {
            "Gchild3": [
              {
                "GGchild5": [
                  {
                    "GGGchild5": []
                  },
                  {
                    "GGGchild6": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {"child3" : 2}
    ]



 const structure = (item) =>{
        
        if(Array.isArray(item)){
            structure(item)
        }else{
            return JSON.stringify(item)
        } 
          
 }

root.map((item) =>{
 console.log(structure(item))
})