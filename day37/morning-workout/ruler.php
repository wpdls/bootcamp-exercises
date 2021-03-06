<style>
.ruler{
    display:flex;
}
.cm,
.mm {
    border-left: 1px solid #555;
    height: 0.4rem;
    width: 0;
}
 
.mm.longer{
    height: 0.8rem;
}
.cm {
    height: 1.4rem;
}
.cm > span,
.mm > span {
    display: block; 
    margin-top:2rem;
    margin-left: -.25rem;
}
</style>
 
<div class='ruler'>
    <?php for ($j = 0; $j < 3; $j++) : ?>
        <div style="margin: 0 10px" class='cm'>
            <span>
                <?php echo $j; ?>
            </span>
        </div>
        <?php for ($i = 0; $i < 4; $i++) :?>
        <div style="margin: 0 10px" class='mm'></div>
        <?php endfor; ?>
        <div style="margin: 0 10px" class='mm longer'></div>
        <?php for ($i = 0; $i < 4; $i++) :?>
        <div style="margin: 0 10px" class='mm'></div>
        <?php endfor; ?>
        
    <?php endfor; ?>
    
    <div style="margin: 0 10px" class='cm'><span>3</span></div>
</div>