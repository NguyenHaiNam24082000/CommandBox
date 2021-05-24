import style from '../styles/Keyboard.module.css';

function Keyboard() {
    return (
        <div>
            <div className={style.keyboard}>
                <div className={`${style.keyboard__row} ${style.keyboard__row__h1}`}>
                    <div data-key={27} className={style.key__word}>
                        <span>esc</span>
                    </div>
                    <div data-key={112} className={style.key__fn}>
                        <span>F1</span>
                    </div>
                    <div data-key={113} className={style.key__fn}>
                        <span>F2</span>
                    </div>
                    <div data-key={114} className={style.key__fn}>
                        <span>F3</span>
                    </div>
                    <div data-key={115} className={style.key__fn}>
                        <span>F4</span>
                    </div>
                    <div data-key={116} className={style.key__fn}>
                        <span>F5</span>
                    </div>
                    <div data-key={117} className={style.key__fn}>
                        <span>F6</span>
                    </div>
                    <div data-key={118} className={style.key__fn}>
                        <span>F7</span>
                    </div>
                    <div data-key={119} className={style.key__fn}>
                        <span>F8</span>
                    </div>
                    <div data-key={120} className={style.key__fn}>
                        <span>F9</span>
                    </div>
                    <div data-key={121} className={style.key__fn}>
                        <span>F10</span>
                    </div>
                    <div data-key={122} className={style.key__fn}>
                        <span>F11</span>
                    </div>
                    <div data-key={123} className={style.key__fn}>
                        <span>F12</span>
                    </div>
                    <div data-key={"n/a"} className={style.key__word}>
                        <span>pwr</span>
                    </div>
                </div>
                <div className={style.keyboard__row}>
                    <div className={style.key__double} data-key={192}>
                        <div>~</div>
                        <div>`</div>
                    </div>
                    <div className={style.key__double} data-key={49}>
                        <div>!</div>
                        <div>1</div>
                    </div>
                    <div className={style.key__double} data-key={50}>
                        <div>@</div>
                        <div>2</div>
                    </div>
                    <div className={style.key__double} data-key={51}>
                        <div>#</div>
                        <div>3</div>
                    </div>
                    <div className={style.key__double} data-key={52}>
                        <div>$</div>
                        <div>4</div>
                    </div>
                    <div className={style.key__double} data-key={53}>
                        <div>%</div>
                        <div>5</div>
                    </div>
                    <div className={style.key__double} data-key={54}>
                        <div>^</div>
                        <div>6</div>
                    </div>
                    <div className={style.key__double} data-key={55}>
                        <div>&amp;</div>
                        <div>7</div>
                    </div>
                    <div className={style.key__double} data-key={56}>
                        <div>*</div>
                        <div>8</div>
                    </div>
                    <div className={style.key__double} data-key={57}>
                        <div>(</div>
                        <div>9</div>
                    </div>
                    <div className={style.key__double} data-key={48}>
                        <div>)</div>
                        <div>0</div>
                    </div>
                    <div className={style.key__double} data-key={189}>
                        <div>_</div>
                        <div>-</div>
                    </div>
                    <div className={style.key__double} data-key={187}>
                        <div>+</div>
                        <div>=</div>
                    </div>
                    <div className={`${style.key__bottom__right} ${style.key__word} ${style.key__w4}`} data-key={8}>
                        <span>delete</span>
                    </div>
                </div>
                <div className={style.keyboard__row}>
                    <div className={`${style.key__bottom__right} ${style.key__word} ${style.key__w4}`} data-key={9}>
                        <span>tab</span>
                    </div>
                    <div className={style.key__letter} data-char="Q">Q</div>
                    <div className={style.key__letter} data-char="W">W</div>
                    <div className={style.key__letter} data-char="E">E</div>
                    <div className={style.key__letter} data-char="R">R</div>
                    <div className={style.key__letter} data-char="T">T</div>
                    <div className={style.key__letter} data-char="Y">Y</div>
                    <div className={style.key__letter} data-char="U">U</div>
                    <div className={style.key__letter} data-char="I">I</div>
                    <div className={style.key__letter} data-char="O">O</div>
                    <div className={style.key__letter} data-char="P">P</div>
                    <div className={style.key__double} data-key={219} data-char={"{["}>
                        <div>{'{'}</div>
                        <div>[</div>
                    </div>
                    <div className={style.key__double} data-key={221} data-char={"}]"}>
                        <div>{'}'}</div>
                        <div>]</div>
                    </div>
                    <div className={style.key__double} data-key={220} data-char="|\">
                        <div>|</div>
                        <div>\</div>
                    </div>
                </div>
                <div className={style.keyboard__row}>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w5}`} data-key={20}>
                        <span>caps lock</span>
                    </div>
                    <div className={style.key__letter} data-char="A">A</div>
                    <div className={style.key__letter} data-char="S">S</div>
                    <div className={style.key__letter} data-char="D">D</div>
                    <div className={style.key__letter} data-char="F">F</div>
                    <div className={style.key__letter} data-char="G">G</div>
                    <div className={style.key__letter} data-char="H">H</div>
                    <div className={style.key__letter} data-char="J">J</div>
                    <div className={style.key__letter} data-char="K">K</div>
                    <div className={style.key__letter} data-char="L">L</div>
                    <div className={style.key__double} data-key={186}>
                        <div>:</div>
                        <div>;</div>
                    </div>
                    <div className={style.key__double} data-key={222}>
                        <div>"</div>
                        <div>'</div>
                    </div>
                    <div className={`${style.key__bottom__right} ${style.key__word} ${style.key__w5}`} data-key={13}>
                        <span>return</span>
                    </div>
                </div>
                <div className={style.keyboard__row}>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w6}`} data-key={16}>
                        <span>shift</span>
                    </div>
                    <div className={style.key__letter} data-char="Z">Z</div>
                    <div className={style.key__letter} data-char="X">X</div>
                    <div className={style.key__letter} data-char="C">C</div>
                    <div className={style.key__letter} data-char="V">V</div>
                    <div className={style.key__letter} data-char="B">B</div>
                    <div className={style.key__letter} data-char="N">N</div>
                    <div className={style.key__letter} data-char="M">M</div>
                    <div className={style.key__double} data-key={188}>
                        <div>&lt;</div>
                        <div>,</div>
                    </div>
                    <div className={style.key__double} data-key={190}>
                        <div>&gt;</div>
                        <div>.</div>
                    </div>
                    <div className={style.key__double} data-key={191}>
                        <div>?</div>
                        <div>/</div>
                    </div>
                    <div className={`${style.key__bottom__right} ${style.key__word} ${style.key__w6}`} data-key={"16-R"}>
                        <span>shift</span>
                    </div>
                </div>
                <div className={`${style.keyboard__row} ${style.keyboard__row__h3}`}>
                    <div className={`${style.key__bottom__left} ${style.key__word}`}>
                        <span>fn</span>
                    </div>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w1}`} data-key={17}>
                        <span>control</span>
                    </div>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w1}`} data-key={18}>
                        <span>option</span>
                    </div>
                    <div className={`${style.key__bottom__right} ${style.key__word} ${style.key__w3}`} data-key={91}>
                        <span>command</span>
                    </div>
                    <div className={`${style.key__double} ${style.key__right} ${style.key__space}`} data-key={32} data-char=" ">
                        &nbsp;
            </div>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w3}`} data-key="93-R">
                        <span>command</span>
                    </div>
                    <div className={`${style.key__bottom__left} ${style.key__word} ${style.key__w1}`} data-key="18-R">
                        <span>option</span>
                    </div>
                    <div data-key={37} className={style.key__arrow}>
                        <span>◀</span>
                    </div>
                    <div className={`${style.key__double} ${style.key__arrow__tall}`} data-key={38}>
                        <div>▲</div>
                        <div>▼</div>
                    </div>
                    <div data-key={39} className={style.key__arrow}>
                        <span>▶</span>
                    </div>
                </div>
            </div>
            <script jsx="true" type="text/javascript">
                {`
                    console.log("Hello")
        function getKey(e) {
            var location = e.location;
            var selector;
            if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
                selector = ['[data-key="' + e.keyCode + '-R"]']
            } else {
                var code = e.keyCode || e.which;
                selector = [
                    '[data-key="' + code + '"]',
                    '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
                ].join(',');
            }
            return document.querySelector(selector);
        }

        function pressKey(char) {
            var key = document.querySelector('[data-char*="' + char.toUpperCase() + '"]');
            if (!key) {
                return console.warn('No key for', char);
            }
            key.setAttribute('data-pressed', 'on');
            setTimeout(function () {
                key.removeAttribute('data-pressed');
            }, 200);
        }

        function next() {
            var c = queue[0];
            queue = queue.slice(1);
            h1.innerHTML = originalQueue.slice(0, originalQueue.length - queue.length);
            pressKey(c);
            if (queue.length) {
                setTimeout(next, Math.random() * 200 + 50);
            }
        }

        h1.innerHTML = "&nbsp;";
        setTimeout(next, 500);

        document.body.addEventListener('keydown', function (e) {
            var key = getKey(e);
            if (!key) {
                return console.warn('No key for', e.keyCode);
            }

            key.setAttribute('data-pressed', 'on');
        });

        document.body.addEventListener('keyup', function (e) {
            var key = getKey(e);
            key && key.removeAttribute('data-pressed');
        });

        function size() {
            var size = keyboard.parentNode.clientWidth / 90;
            keyboard.style.fontSize = size + 'px';
            console.log(size);
        }

        var keyboard = document.querySelector('.keyboard');
        window.addEventListener('resize', function (e) {
            size();
        });
        size();
                    `
                }
            </script>
        </div>
    );
}

export default Keyboard;