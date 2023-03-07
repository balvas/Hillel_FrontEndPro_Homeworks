function generateList(array) {
    document.body.insertAdjacentHTML('afterbegin', '<ul></ul>');

    let _ul = document.querySelector('ul');

    function subLi(element) {

        let _subLi = document.createElement('li');
        let _subUl = document.createElement('ul');
        _subLi.appendChild(_subUl);

        let subNodes = element.map(subElement => {
            let li = document.createElement('li');
            li.textContent = subElement;
            return li;
        });
        _subUl.append(...subNodes);
        return _subLi;
    }

    let nodes = array.map(element => {
        if (!Array.isArray(element)) {
            let li = document.createElement('li');
            li.textContent = element;
            return li;
        } else
        addLi = subLi(element);
        return addLi;

    });

    _ul.append(...nodes);
}


generateList([1, 2, [1.1, 1.2, 1.3], 3]);