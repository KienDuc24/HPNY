
document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                const container = document.createElement('div');
                                container.classList.add('button-container');
                                document.body.appendChild(container);
                                setTimeout(() => {
                                    const newLink1 = document.createElement('a');
                                    newLink1.href = './wish.html';
                                    newLink1.textContent = 'Wish';
                                    newLink1.classList.add('truck-button');
                                    newLink1.id ='link1';
                                  
                                    const newLink2 = document.createElement('a');
                                    newLink2.href = './firework.html';
                                    newLink2.textContent = 'Firework';
                                    newLink2.classList.add('truck-button');
                                    newLink2.id ='link2';

                                    const container = document.createElement('div');
                                    container.classList.add('button-container');
                                    document.body.appendChild(container);
                                  
                                    container.appendChild(newLink1);
                                    container.appendChild(newLink2);
                                  
                                    document.getElementById("form").style.display = "none";
                                  }, 500);

                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
                
            }
            
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
});

