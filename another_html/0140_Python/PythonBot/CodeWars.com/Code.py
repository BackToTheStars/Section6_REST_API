def isValidWalk(walk):
    # determine if walk is valid, returns to the same point, and takes 10 minutes
    # check if we have a massive as input, 
    # check how many elements are there in the massive, 
    # check are they correct instructions, are there 10 correct instructions of NSWE types
    # x = 0, y = 0, steps = 0
    # cycle for massive elements from 0 to N
        # if "n" then y = y + 1 
        # if "s" then y = y - 1
        # if "w" then x = x - 1
        # if "e" then x = x + 1
        # if (element != n, s, w or e) then drop element and go to the next one
        # steps = steps + 1
    # if (x = 0 & y = 0) & steps = 10 then return True;   
    
    print(isinstance(walk, list))
    return True   

isValidWalk([n,e,w,s,n,w,e,s,n,e]);

