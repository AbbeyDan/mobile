function main(tbl){
	return dao.fetch("select * from app_course",Cnd.where("id","=",tbl.id))
}