$(document).ready(function(){

})
$('form').on('submit',function(e){
    e.preventDefault();
    const clickTarefa = $('#nova-tarefa').val();
    const tarefaNova = $('<li></li>')
$(`<div class="efeito-riscar">
<label for="nova-tarefa">${clickTarefa}</label>
</div>`).appendTo(tarefaNova);
$(tarefaNova).appendTo('ul');
$('#nova-tarefa').val('')
})
