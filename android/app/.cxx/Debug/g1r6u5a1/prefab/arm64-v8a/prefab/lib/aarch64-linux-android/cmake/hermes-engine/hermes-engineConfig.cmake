if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/alauddinkhan/.gradle/caches/8.11.1/transforms/06662527312202da63656e1f31151aa6/transformed/hermes-android-0.76.2-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/alauddinkhan/.gradle/caches/8.11.1/transforms/06662527312202da63656e1f31151aa6/transformed/hermes-android-0.76.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

