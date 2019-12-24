/**
 * 表单数据验证工具类
 *
 * @export
 * @class FormDataVerifyUtils
 */
export default class FormDataVerifyUtils {

  /**
   * 验证数据
   *
   * @static
   * @param {*} inputValue
   * @param {*} title
   * @param {*} verify
   * @returns
   * @memberof FormDataVerifyUtils
   */
  static verifyData(inputValue, title, verify) {
    let verifyInfo = {
      title: title,
      msg: ""
    };
    let verifyType = verify.verifyType;
    let isEmpty = verify.isEmpty;
    let verifyTypeState = typeof (verifyType) != "undefined" && verifyType != "";
    let inputValueState = typeof (inputValue) != "undefined" && inputValue != "";
    // 判断是否为必填
    if (typeof (isEmpty) != "undefined") {
      // 判断值是否空
      if (inputValueState) {
        if (verifyTypeState) {
          verifyInfo.msg = this.initVerify(inputValue, verifyType);
        }
      } else {
        verifyInfo.msg = title + "不能为空";
      }
    } else {
      // 值不为空，并且验证类型不为空
      if (inputValueState && verifyTypeState) {
        verifyInfo.msg = this.initVerify(inputValue, verifyType);
      }
    }
    return verifyInfo;
  }
}