type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const activeObject = (active: MenuOptions)=>{
    let Objects = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(active !== ''){
        Objects[active] = true;
    }

    return Objects;
}