$(document).ready(function(){

})
$('ul li').click(function() {
    $(this).toggleClass('checked');
});

$('form').on('submit',function(e){
    e.preventDefault();
    const clickTarefa = $('#nova-tarefa').val();
    const tarefaNova = $('<li></li>')
$(`
<li>
    <label>${clickTarefa}</label>
</li>`).appendTo(tarefaNova);
$(tarefaNova).appendTo('ul');


$('ul li').click(function() {
    $(this).toggleClass('checked');
});
$('#nova-tarefa').val('')

})
