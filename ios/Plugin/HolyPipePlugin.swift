import Foundation

@objc public class HolyPipePlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
