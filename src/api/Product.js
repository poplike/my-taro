import Http from '@utils/Http'

export default class ProductApi extends Http {
  /***
   * 产品搜索建议
   *  */
  static Suggest(params) {
    return this.post('/Product/Product.Suggest', params, false)
  }

  /***
   * ES 查询价格
   *  */
  static Search(params) {
    return this.post('/Product/Product.Search', params, false)
  }

  /***
   * ES 查询价格
   *  */
  static Query(params) {
    return this.post('/Product/Product.Query', params, false)
  }
}
