import mongoose from 'mongoose';

let schema = mongoose.Schema;

let _baseField = {
    // SysVersion
    SysVersion:{
        type: Number,
        Name: '版本'
    },
    // Create on time
    CreateOn: {
        type: Date,
        Name: '创建时间',
        default: Date.now
    },
    //创建人
    CreateBy: {
        type: String,
        Name: '创建人',
        trim: true
    },
    //修改时间
    ModifyOn: {
        type: Date,
        Name: '修改时间',
        default: Date.now
    }
};

function CreateEntity(modelField){
    let referenceEntitys = {};

    for(let p in _baseField){
        modelField[p] = _baseField[p];
    }

    this.Fields = modelField;

    this.Schema = new schema(this.Fields);

    /*
    * @param index: 索引  etc {Code： 1}
    * @param params: 参数 etc {'unique': true}
    */
    this.addIndex = (index, params) => {
        this.Schema.index(index, params);
    };

    /*
    * @param entityName 实体名 非空
    * @param name 中文名 非空
    * @param collectionName 集合名 默认为 entityName
    * @param parentEntityName 父实体名
    */
    this.create = (entityName, name, collectionName, parentEntityName) => {
        if(!name){
            name = entityName;
        }

        if(!collectionName){
            collectionName = entityName;
        }

        let parentEntity = null;

        if(parentEntityName){
            parentEntity = EntityCollection.getEntity(parentEntityName);
            if(!parentEntity){
                
            }
        }
    }
}