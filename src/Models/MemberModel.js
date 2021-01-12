class MemberModel {
    constructor(plainMemberOrName, gamish, hitagdut, isActive= true){
        if(typeof plainMemberOrName==='object'){
            this.name= plainMemberOrName.name;
            this.gamish= plainMemberOrName.gamish;
            this.hitagdut= plainMemberOrName.hitagdut;
            this.isActive= plainMemberOrName.isActive;
        }else{
            this.name= plainMemberOrName;
            this.gamish= gamish;
            this.hitagdut= hitagdut;
            this.isActive= isActive;
        }
        
    }
}
export default MemberModel