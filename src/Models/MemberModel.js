class MemberModel {
    constructor(plainMemberOrName, birthDate, aliyaDate, idNum ,gamish, hitagdut, isActive= true, leaveDate){
        if(typeof plainMemberOrName==='object'){
            this.name= plainMemberOrName.name;
            this.birthDate= plainMemberOrName.birthDate;
            this.aliyaDate= plainMemberOrName.aliyaDate;
            this.idNum= plainMemberOrName.idNum;
            this.gamish= plainMemberOrName.gamish;
            this.hitagdut= plainMemberOrName.hitagdut;
            this.isActive= plainMemberOrName.isActive;
            this.leaveDate= plainMemberOrName.leaveDate;
        }else{
            this.name= plainMemberOrName;
            this.birthDate= birthDate;
            this.aliyaDate= aliyaDate;
            this.idNum= idNum;
            this.gamish= gamish;
            this.hitagdut= hitagdut;
            this.isActive= isActive;
            this.leaveDate= leaveDate;
        }
        
    }
}
export default MemberModel