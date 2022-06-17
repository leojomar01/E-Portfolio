class Slider{
    constructor(options){
        this.sections = document.querySelectorAll(options.section);
        this.nav = document.querySelector(options.dots);
        window.addEventListener('scroll',this.setStatus.bind(this));
        this.nav.addEventListener('click', this.scrollTo.bind(this));

    }

    setStatus(){
        let scrollPos= window.scrollY;
        let dots= Array.from(this.nav.children);

        this.sections.forEach((section,i)=>{
            let halfWindow = window.innerHeight/2;
            let secTop = section.offsetTop;

            if(scrollPos > secTop - halfWindow && scrollPos < secTop + halfWindow){
                this.removeDot();
                dots[i].classList.add('active');
            }
        })
    }
    removeDot(){
        let dots = this.nav;
        let active = dots.querySelector('.active');
        if(active != null){
            active.classList.remove('active')
        }
    }

    scrollTo(e) {
        const dots = Array.from(this.nav.children);
        const windowHeight = window.innerHeight;
    
        dots.forEach((dot, i) => {
          if (dot == e.target) {
    
            window.scrollTo({
              top: windowHeight * i,
              behavior: 'smooth',
            });
          }
        });
      }
}


new Slider({section: '.section',dots: '#dots',})